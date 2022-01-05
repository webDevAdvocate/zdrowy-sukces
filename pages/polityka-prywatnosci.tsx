import { NextPage } from "next";
import Head from 'next/head';
import React from "react";
import { Cookies } from "../src/components/cookies/cookies";
import { Header } from "../src/components/header/header";
import { PrivacySection } from "../src/components/privacy/privacySection";

const Privacy: NextPage = () => (
    <section>
        <Head>
            <title>Zdrowy Sukces</title>
            <meta name="description" content="Zdrowy sukces" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header pink />
        <PrivacySection />
        <Cookies />
    </section>
);

export default Privacy;
