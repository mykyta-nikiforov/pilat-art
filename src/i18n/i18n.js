import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import React from "react";

i18n.use(LanguageDetector).init({
    // we init with resources
    resources: {
        en: {
            translations: {
                "Andrii Pilat": "Andrii Pilat",
                Gallery: "Gallery",
                Archive: "Archive",
                Contact: "Contact",
                Previous: "Previous",
                Next: "Next",
                "picture of": "picture of",
                "Artist's studio": "Artist's studio",
                "Ukraine, Chernivtsi": "Ukraine, Chernivtsi",
                "plastic bags LDPE4/HDPE2": "plastic bags LDPE4/HDPE2",
                "cm": "cm",
                About: "About",
                AboutContent1: "I see the field but it is unrecognizable; it is polluted rather than filled with. " +
                    "There is too much of “too much”, the moments are fading; so we are, turning anything to a wasting " +
                    "dump before trying to comprehend that – food, information, ourselves. Emotions became peripheral " +
                    "being superseded by incessancy and momentariness.",
                AboutContent2: "I talk about this with color. I don’t like the question “about what?” since only “how” really matters.",
                AboutContent3: "I want to leave this field untouchable to allow contemplators to fill it by themselves.",
                AboutContent4: "I want the dialogue to happen. Conversation between color, emotions and yourself. " +
                    "With ardor, whispering or reproaching – you are welcomed to choose.\n" +
                    "I want provocations. Sabotages by associations and memories. I want to see how this color, form or " +
                    "expression can re-echo. We create the plot together – the canvas and the contemplator’s imagination.",
                AboutContent5: "Where do I get color? I take it from used and thrown plastic. It sows fields, lies underground, " +
                    "gets flown by rivers, and penetrates stomachs. It was got rid of, suggesting, its mission was completed.\n",
                AboutContent6: "Painting is not reborn, but a reflection of conscience. I do not conclude it into the 3R concept, " +
                    "although it lies on the surface, and, perhaps, I would refuse from such art in exchange for surrounding without plastic.\n",
                AboutContent7: "Then I would search for a color somewhere else. But yet I continue liquating everything " +
                    "that I find today near my feet  but that was being at your hand only yesterday."
            }
        },
        uk: {
            translations: {
                "Andrii Pilat": "Андрій Пілат",
                Gallery: "Галерея",
                Archive: "Архів",
                Contact: "Контакти",
                Previous: "Попередня",
                Next: "Наступна",
                "picture of": "картина з",
                "Artist's studio": "Студія художника",
                "Ukraine, Chernivtsi": "Україна, Чернівці",
                "plastic bags LDPE4/HDPE2": "пластикові пакети LDPE4/HDPE2",
                "cm": "см",
                About: "Про картини",
                AboutContent1: "Я бачу простір, але його важко помітити, він засмічений, але ненасичений. Забагато “забагато”, де\n" +
                    "                    розчиняються моменти, і ми самі, перетворюючи на сміттєзвалище будь-що, не встигаючи навіть це\n" +
                    "                    осягнути. Їжу, інформацію, себе. Емоції стали периферією, витіснені невпинністю і короткочасністю.",
                AboutContent2: "Про це я говорю кольором. Не люблю питання “про що?”, бо важливим є “яким чином”.",
                AboutContent3: "Я хочу залишити цей простір нечепаним, аби споглядач заповнював його самовільно.",
                AboutContent4: "Я хочу діалогу, розмови. Співбесіди кольору з емоціями і самим собою. З запалом, пошепки,\n" +
                    "                    наріканнями — будь ласка. Хочу провокацій. Саботажу асоціацій та спогадів. Який відгук може знайти\n" +
                    "                    цей колір, ця форма, вираз. Ми робимо сюжет разом: полотно і уява споглядача.",
                AboutContent5: "Де я беру колір? З виготовленого і позбутого — пластику. Він засіює поля, залягає під ґрунт,\n" +
                    "                    омивається ріками, проникає у шлунок. Його позбулися, вважаючи, що місію вже завершено.",
                AboutContent6: "Картина - не переродження, а відбиток совісті. Я не вміщую це в концепт трьох R, хоча це і лежить\n" +
                    "                    десь на поверхні, і, певно, відмовився б від такого мистецтва, взамін на відсутність пластику навколо.",
                AboutContent7: "Тоді б я шукав колір деінде. А поки що плавлю усе, що було ще вчора у вас під рукою, а сьогодні\n" +
                    "                    знаходжу у себе під ногами."
            }
        }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },

    react: {
        wait: true
    }
});

i18n.changeLanguage("en");

export default i18n;