import React from 'react';
const achievementsList = [
    {
        metric: "Projects",
        value: "5",
        postfix: "+"
    },
    {
        prefix: "~",
        metric: "Users",
        value: "50",
    },
    {
        metric: "Awards",
        value: "3",
    },
    {
        metric: "Years",
        value: "2",
        postfix: "+"
    },
];
const ExperienceSection = () => {
    return (
        <section id="experience">
            <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <div
                    className="sm:border-borderColor sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
                    { achievementsList.map((achievement, index) => {
                        return (<div
                            key={ index }
                            className="flex flex-col items-center justify-center mx-4"
                        >
                            <h2 className="text-white text-4xl font-bold flex flex-row">
                                { achievement.prefix }
                                { achievement.postfix }
                            </h2>
                            <p className="text-textColor text-base">{ achievement.metric }</p>
                        </div>);
                    }) }
                </div>
            </div>
        </section>);
};

export default ExperienceSection;