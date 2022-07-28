interface Question {
    id: string,
    question: string,
    answer: string,
} 

{/* Frequently asked questions */ }

export const FrequentlyAskedQuestions = () => {

    const questions = [
        {
            id: 'quest-1',
            question: 'How much time does it take?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 'quest-2',
            question: 'What is your class naming convention?',
            answer: 'Lorem ipsum',
        },
        {
            id: 'quest-3',
            question: 'How do you communicate?',
            answer: 'Lorem ipsum',
        },
        {
            id: 'quest-4',
            question: 'I have a bigger project. Can you handle it?',
            answer: 'Lorem ipsum',
        },
        {
            id: 'quest-5',
            question: 'What is your class naming convention?',
            answer: 'Lorem ipsum',
        },
    ]

    return (
        < div
                    className = 'flex justify-between bg-white px-10 md:px-32 py-24 border-2 border-black w-fit'
        >
        <div
            className='flex flex-col md:flex-row  md:min-w-full'
        >
            <div
                className='md:w-1/4'
            >
                <p
                    className='text-3xl text-green1 leading-11 mb-3'
                >
                    Frequently asked questions
                </p>
                <p
                    className='text-lg md:text-sm text-gray5 leading-6 '
                >
                    Contact us for more info
                </p>
            </div>
            <div
                className='md:ml-28 md:w-3/4 mt-10 md:mt-2 w-[100vw]'
            >
                {questions.map((question, index) => (
                    <div
                        key={question.id}
                        className='md:w-full'
                    >
                        <div
                            className={`items-center flex justify-between md:grid md:grid-container md:grid-cols-10 md:gap-x-12 ${index < questionsLength - 1 ? 'border-b-2' : ''} ${index === 0 ? 'pb-6' : 'py-6'}`}
                        >
                            <div className="flex">
                                <p
                                    className='md:col-span-1 text-xl text-green1 leading-7 w-fit mr-5'
                                >
                                    {index < 9 ? `0${index + 1}` : index + 1}
                                </p>
                                <p
                                    className='md:col-span-8 text-xl text-green1 leading-7'
                                >
                                    {question.question}
                                </p>
                            </div>
                            <div
                                className={`col-span-1`}
                                onClick={this._toggleQuestionAnswer(question)}
                            >
                                <div
                                    className={`w-4 h-4 cursor-pointer ${openedQuestions[question.id] ? 'rotate-45' : ''}`}
                                >
                                    <Image
                                        src='/assets/plus.png'
                                        width="16"
                                        height="16"
                                        alt='right-green'
                                    />
                                </div>
                            </div>
                            {openedQuestions[question.id] && question.answer &&
                                <>
                                    <p
                                        className='col-span-1'
                                    />
                                    <p
                                        className='col-span-8 text-gray5 text-sm leading-6 mt-3 mb-3'
                                    >
                                        {question.answer}
                                    </p>
                                    <p
                                        className='col-span-1'
                                    />
                                </>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
                </div >        
    )
}