import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className={'flex flex-col items-center justify-center'}>
      <h1 className={'text-2xl m-6'}>CPRG 306: Web Development 2 - Assignments</h1>
        <ul>
            <li><Link href={'week-2'}>Week 2</Link></li>
            <li><Link href={'week-3'}>Week 3</Link></li>
        </ul>
    </main>
  );
}
