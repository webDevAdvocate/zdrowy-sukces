import { NextPage } from "next";
import Head from 'next/head';
import React from "react";
import { Cookies } from "../src/components/cookies/cookies";
import { Header } from "../src/components/header/header";
import { TermsSection } from "../src/components/terms/termsSection";

const Terms: NextPage = () => (
    <section>
        <Head>
            <title>Zdrowy Sukces</title>
            <meta name="description" content="Zdrowy sukces" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header pink />
        <TermsSection />
        <Cookies />
    </section>
);

export default Terms;
