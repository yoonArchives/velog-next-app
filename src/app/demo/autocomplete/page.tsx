"use client";

import { useState } from "react";
import Autocomplete from "@/components/uix/autocomplete";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
} from "@/components/uix/typography";
import Link from "next/link";
import { LinkIcon } from "lucide-react";

const options = [
  "사자",
  "호랑이",
  "표범",
  "치타",
  "하이에나",
  "늑대",
  "여우",
  "코요테",
  "곰",
  "북극곰",
  "팬더",
  "코알라",
  "캥거루",
  "왈라비",
  "나무늘보",
  "개미핥기",
  "아르마딜로",
  "코끼리",
  "코뿔소",
  "하마",
  "기린",
  "얼룩말",
  "말",
  "당나귀",
  "낙타",
  "라마",
  "알파카",
  "사슴",
  "노루",
  "고라니",
  "무스",
  "순록",
  "멧돼지",
  "돼지",
  "소",
  "물소",
  "양",
  "염소",
  "산양",
  "토끼",
  "다람쥐",
  "청설모",
  "햄스터",
  "기니피그",
  "비버",
  "수달",
  "해달",
  "족제비",
  "오소리",
  "라쿤",
  "원숭이",
  "침팬지",
  "고릴라",
  "오랑우탄",
  "긴팔원숭이",
  "바다표범",
  "바다사자",
  "바다코끼리",
  "고래",
  "돌고래",
  "범고래",
  "상어",
  "가오리",
  "참치",
  "연어",
  "거북이",
  "바다거북",
  "악어",
  "도마뱀",
  "카멜레온",
  "이구아나",
  "뱀",
  "독사",
  "아나콘다",
  "개구리",
  "두꺼비",
  "맹꽁이",
  "도롱뇽",
  "뉴트",
  "펭귄",
  "타조",
  "독수리",
  "매",
  "부엉이",
  "올빼미",
  "까마귀",
  "까치",
  "참새",
  "비둘기",
  "닭",
  "오리",
  "거위",
  "백조",
  "홍학",
  "공작",
  "앵무새",
  "펭귄",
  "펠리컨",
  "갈매기",
  "박쥐",
];

export default function Page() {
  const [value, setValue] = useState("");

  return (
    <div>
      <TypographyH1>Autocomplete</TypographyH1>
      <TypographyH2>예제</TypographyH2>
      <TypographyH3>Static</TypographyH3>
      <Autocomplete
        options={options}
        value={value}
        onOptionSelect={(val) => setValue(val)}
        minLength={1}
        isPending={false}
      />

      <div className="py-2">
        <b>자동완성 리스트는 다음과 같습니다.</b>
        <div className="px-2 py-1">
          사자, 호랑이, 표범, 치타, 하이에나, 늑대, 여우, 코요테, 곰, 북극곰,
          팬더, 코알라, 캥거루, 왈라비, 나무늘보, 개미핥기, 아르마딜로, 코끼리,
          코뿔소, 하마, 기린, 얼룩말, 말, 당나귀, 낙타, 라마, 알파카, 사슴,
          노루, 고라니, 무스, 순록, 멧돼지, 돼지, 소, 물소, 양, 염소, 산양,
          토끼, 다람쥐, 청설모, 햄스터, 기니피그, 비버, 수달, 해달, 족제비,
          오소리, 라쿤, 원숭이, 침팬지, 고릴라, 오랑우탄, 긴팔원숭이, 바다표범,
          바다사자, 바다코끼리, 고래, 돌고래, 범고래, 상어, 가오리, 참치, 연어,
          거북이, 바다거북, 악어, 도마뱀, 카멜레온, 이구아나, 뱀, 독사,
          아나콘다, 개구리, 두꺼비, 맹꽁이, 도롱뇽, 뉴트, 펭귄, 타조, 독수리,
          매, 부엉이, 올빼미, 까마귀, 까치, 참새, 비둘기, 닭, 오리, 거위, 백조,
          홍학, 공작, 앵무새, 펭귄, 펠리컨, 갈매기, 박쥐
        </div>
      </div>
      <TypographyH3>Dynamic</TypographyH3>
      <div>해당 내역은 Debounce 페이지를 참고하세요.</div>
      <Link
        href="/demo/debounce"
        className="my-2 flex items-center gap-1 underline"
      >
        <LinkIcon size="16" />
        Debounce 페이지(개발 중)
      </Link>
    </div>
  );
}
