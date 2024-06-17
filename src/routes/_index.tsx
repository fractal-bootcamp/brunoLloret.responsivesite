
import type { MetaFunction } from "@remix-run/node";
import Header from '../components/Header'
import About from './about'
import EqualZero from './EqualZero'
import LearningToLearn from "./LearningToLearn";
import BabylonianTalmud from "./BabylonianTalmud";
import TheNewestTestament from "./TheNewestTestament";



export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};


export default function Index() {
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>

            <Header />

        </div>
    );
}
