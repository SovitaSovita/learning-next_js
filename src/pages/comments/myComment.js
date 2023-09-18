import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/layout"
import Alert from "@/components/alert";

export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>comment</title>
                </Head>
                <Alert type="success">
                    <h1>My Comment</h1>
                </Alert>
            </Layout>
        </>
    )
}