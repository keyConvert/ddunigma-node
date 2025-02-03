import { Ddu64 } from "..";

const ddu64 = new Ddu64(["D", "d", "U", "u", "T", "t", "A", "a"], "응");

const answer = "수오미 그대를 품고싶소";
const encoded = ddu64.encode64(Buffer.from(answer, "utf-8"));
console.log(encoded);
const decoded = ddu64.decode64(encoded).toString("utf-8");
console.log(decoded);

console.log("=-==");
const encoded_eng = ddu64.encode(Buffer.from(answer, "utf-8"), "KR");
console.log(encoded_eng);

const decoded_eng = ddu64.decode(encoded_eng, "KR").toString("utf-8");
console.log(decoded_eng);

console.log("=-==");
const ddu64_other = new Ddu64(
  ["오", "징", "어", "게", "이", "섹", "스", "무", "야", "호"],
  "즁"
);

const answer2 =
  "수오미 그대를 품고싶소 아ㅓ댜러아난djgdjkdgkjwsdfhsfduhsfdkjsdfowekjhfds98234hkjfsd987w34kgjiuga98a";
const encoded2 = ddu64_other.encode(Buffer.from(answer2, "utf-8"));
console.log(encoded2);
const decoded2 = ddu64_other.decode(encoded2).toString("utf-8");
console.log(decoded2);
