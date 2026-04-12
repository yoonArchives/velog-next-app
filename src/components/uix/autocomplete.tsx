"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
  PointerEvent,
} from "react";
import { Command } from "cmdk";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SearchIcon } from "lucide-react";

interface AutocompleteProps {
  disabled?: boolean;
  invalid?: boolean;
  isPending?: boolean;
  minLength?: number;
  options: string[];
  value?: string;
  onKeywordChange?: (keyword: string) => void;
  onOptionSelect?: (value: string) => void;
}

function Autocomplete({
  disabled = false,
  invalid = false,
  isPending = false,
  minLength = 1,
  options,
  value = "",
  onKeywordChange,
  onOptionSelect,
}: AutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>(value);

  const handleBlur = () => {
    setOpen(false);
  };

  const handleFocus = () => {
    onKeywordChange?.(keyword);
    setOpen(keyword.length >= minLength);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key, currentTarget, shiftKey } = event;
    const length = currentTarget.value.length;

    if (shiftKey && (key === "Home" || key === "End")) {
      currentTarget.setSelectionRange(0, length);
    } else if (key === "Home") {
      currentTarget.setSelectionRange(0, 0);
    } else if (key === "End") {
      currentTarget.setSelectionRange(length, length);
    } else if (key === "Escape") {
      setOpen(false);
    }
  };

  const handleValueChange = useCallback(
    (value: string) => {
      setKeyword(value);
      onKeywordChange?.(value);
      setOpen(value.length >= minLength);
    },
    [onKeywordChange, minLength],
  );

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleSelect = useCallback(
    (selectedOption: string) => {
      setKeyword(selectedOption);
      onOptionSelect?.(selectedOption);
      setTimeout(() => inputRef?.current?.blur(), 0);
    },
    [onOptionSelect, inputRef],
  );

  useEffect(() => setKeyword(value), [value]);

  return (
    <Popover open={open}>
      <Command>
        <PopoverTrigger className="w-full" asChild>
          <Command.Input
            aria-invalid={invalid}
            disabled={disabled}
            ref={inputRef}
            value={keyword}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            onValueChange={handleValueChange}
            className="border-input file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 disabled:bg-input/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 h-8 w-full min-w-0 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-3 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 md:text-sm"
          />
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className={cn(
            "max-h-[300px] w-[var(--radix-popover-trigger-width)] overflow-y-auto p-1.5",
          )}
          onOpenAutoFocus={(event) => event.preventDefault()}
          onCloseAutoFocus={(event) => event.preventDefault()}
        >
          <Command.List>
            {open && isPending && <Command.Loading>Loading...</Command.Loading>}

            {open && !isPending && (
              <>
                <Command.Empty>일치하는 내역이 없습니다.</Command.Empty>
                {options?.map((option, index) => (
                  <Command.Item
                    key={`${option}-${index}`}
                    value={option}
                    onPointerDown={handlePointerDown}
                    onSelect={handleSelect}
                    className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground flex w-full cursor-pointer items-center gap-2 px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                  >
                    <SearchIcon />
                    {option}
                  </Command.Item>
                ))}
              </>
            )}
          </Command.List>
        </PopoverContent>
      </Command>
    </Popover>
  );
}

export default Autocomplete;
