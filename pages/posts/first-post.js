import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const Profile = () =>(
    <Image
    src="/images/profile.jpg"
    height={144}
    width={144}
    alt="Your Name"
    />
);

export default function FirstPost(){
    return (
        <>
        <Head>
            <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
            <Link href="/">Back to home</Link>
        </h2>
        </>
    )
}

