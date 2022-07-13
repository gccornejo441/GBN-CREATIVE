import React, {PureComponent} from 'react';
import {withTranslation} from "next-i18next";
import {TFunction} from "react-i18next";
import {NextAuthSession} from "../types/general";
import Link from "next/link";
import Image from 'next/image'
import moment from "moment";


interface Props {
    t: TFunction,
    session: NextAuthSession
}

interface Testimony {
    id: string,
    text: string,
    name: string,
    occupation: string,
    profilePicture: string
}

interface Question {
    id: string,
    question: string,
    answer: string,
}

interface Article {
    id: string,
    imageURL: string
    date: string,
    title: string,
    preview: string,
    content: string,
}

interface State {
    testimonies: Array<Testimony>,
    currentTestimoniesPage: number,
    questions: Array<Question>,
    openedQuestions: object,
    inquiry: object,
    blogArticles: Array<Article>,
    subscriptionEmail: string,
}


class ExampleComponent extends PureComponent<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            testimonies: [
                {
                    id: 'test-1',
                    text: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
                    name: 'Jenny Wilson',
                    occupation: 'Vice President',
                    profilePicture: 'jenny.png'
                },
                {
                    id: 'test-2',
                    text: '"The coolest agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
                    name: 'Jenny Wilson',
                    occupation: 'President',
                    profilePicture: 'jenny.png'
                },
                {
                    id: 'test-3',
                    text: '"The finest agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
                    name: 'Jenny Wilson',
                    occupation: 'CTO',
                    profilePicture: 'jenny.png'
                },
            ],
            currentTestimoniesPage: 1,
            questions: [
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
            ],
            openedQuestions: {},
            inquiry: {
                name: '',
                email: '',
                designURL: '',
            },
            blogArticles: [
                {
                    id: 'article-1',
                    imageURL: 'section3-img-1.png',
                    date: '01-19-2022',
                    title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
                    preview: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
                    content: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
                },
                {
                    id: 'article-2',
                    imageURL: 'section3-img-2.png',
                    date: '01-19-2022',
                    title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
                    preview: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
                    content: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
                },
                {
                    id: 'article-3',
                    imageURL: 'section3-img-3.png',
                    date: '01-19-2022',
                    title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
                    preview: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
                    content: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
                },
            ],
            subscriptionEmail: '',
        }
    }

    _incrementTestimoniesPage = () => {
        this.setState(prevState => {
            const {testimonies, currentTestimoniesPage} = prevState;

            if (currentTestimoniesPage === testimonies.length) {
                return;
            }

            return {
                currentTestimoniesPage: prevState.currentTestimoniesPage + 1,
            }
        });
    }

    _decrementTestimoniesPage = () => {
        this.setState(prevState => {
            const {currentTestimoniesPage} = prevState;

            if (currentTestimoniesPage === 1) {
                return;
            }

            return {
                currentTestimoniesPage: prevState.currentTestimoniesPage - 1,
            }
        });
    }

    _toggleQuestionAnswer = question => () => {
        this.setState(prevState => {
            const {openedQuestions} = prevState;

            return {
                openedQuestions: {
                    ...openedQuestions,
                    [question.id]: !openedQuestions[question.id],
                }
            }
        });
    }

    _onInputValueChange = field => event => {
        this.setState(prevState => ({
            inquiry: {
                ...prevState.inquiry,
                [field]: event.target.value,
            }
        }))
    }

    _onSubscribe = () => {

    }

    render() {
        const {
            testimonies,
            currentTestimoniesPage,
            questions,
            openedQuestions,
            inquiry,
            blogArticles,
            subscriptionEmail
        } = this.state;
        const {name, email, designURL} = inquiry;
        const isFirstTestimoniesPage = currentTestimoniesPage === 1;
        const isLastTestimoniesPage = currentTestimoniesPage === testimonies.length;
        const questionsLength = questions.length;

        return (
            <>
                {/* Building stellar websites */}
                <div
                    className='relative md:bg-split-gray-green pt-12 md:pb-24 2xl:pt-16 2xl:pb-32'
                >
                    <div className="md:grid md:grid-cols-2 gap-20 max-w-full lg:max-w-fit lg:mx-auto px-4">
                        <div className='text-center md:text-left md:w-104 2xl:w-140 px-10 md:px-0'>
                            <p
                                className='text-green1 text-left text-6xl leading-17.2 2xl:text-7.5xl 2xl:leading-21.5 font-medium mb-5 lg:mb-9 2xl:mb-12'
                            >
                                Building stellar websites for early startups
                            </p>
                            <p
                                className='leading-7 text-left mb-5 lg:mb-12 2xl:mb-16 text-gray3 text-2xl md:text-lg 2xl:text-base'
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt.
                            </p>
                            <div className='flex justify-center'>
                                <Link
                                    href=''
                                >
                                    <div
                                        className='flex items-center justify-center bg-yellow1 text-black text-base h-12.8 w-46 cursor-pointer'
                                    >
                                        View our work
                                    </div>
                                </Link>
                                <Link
                                    href=''
                                >
                                    <div className='flex items-center ml-10 cursor-pointer'>
                                        <p
                                            className='mr-5'
                                        >
                                            View Pricing
                                        </p>
                                        <Image
                                            src='/assets/right-arrow.svg'
                                            width="19"
                                            height="9"
                                            alt='right-arrow'
                                        />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div
                            className='mt-16 2xl:top-16 2xl:right-36 w-full h-99 2xl:w-167.25 2xl:h-123.75 bg-section1-img bg-cover' />
                   </div>
                </div>

                {/* How we work */}
                <div className='bg-gray py-12 md:py-24'>
                    <div className="container grid md:grid-cols-2 mx-auto px-4">
                        <div
                            className='w-full lg:w-full lg:mr-28.4 text-center md:text-left border-2 border-black'
                        >
                            <p
                                className='text-green1 text-4xl lg:text-4.5xl 2xl:text-7xl w-full leading-12 pb-3 2xl:pb-4'
                            >
                                How we work
                            </p>
                            <p
                                className='text-lg md:text-md w-full text-gray3 leading-7 pb-4'
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                            </p>
                            <Link
                                href='/contact-us'
                            >
                                <div
                                    className='flex items-center cursor-pointer'
                                >
                                    <p
                                        className='text-lg text-green1 leading-7 mr-5'
                                    >
                                        Get in touch with us
                                    </p>
                                    <Image
                                        src='/assets/right-arrow.svg'
                                        width="19"
                                        height="9"
                                        alt='right-arrow'
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="text-center md:text-left grid md:grid-cols-2 grid-rows-2 gap-7 grow">
                            <div className="border-2 border-red-500">
                                <Image
                                    src='/assets/s2-gy-1.png'
                                    width="40"
                                    height="40"
                                    alt='s2-gy-1'
                                />
                                <p
                                    className='text-4xl md:text-2xl mt-3 leading-10 pb-2'
                                >
                                    Strategy
                                </p>
                                <p
                                    className='md:text-sm text-2xl text-gray3 mt-4 leading-2 md:leading-6 pb-2'
                                >
                                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                                </p>
                            </div>
                            <div>
                                <Image
                                    src='/assets/s2-gy-2.png'
                                    width="40"
                                    height="40"
                                    alt='s2-gy-2'
                                />
                                <p
                                    className='text-2xl mt-3 leading-10 pb-2'
                                >
                                    Wireframing
                                </p>
                                <p
                                    className='text-sm	text-gray3 mt-4 leading-6 pb-2'
                                >
                                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                                </p>
                            </div>
                            <div>
                                <Image
                                    src='/assets/s2-gy-3.png'
                                    width="40"
                                    height="40"
                                    alt='s2-gy-3'
                                />
                                <p
                                    className='text-2xl mt-3 leading-10 pb-2'
                                >
                                    Design
                                </p>
                                <p
                                    className='text-sm	text-gray3 mt-4 leading-6 pb-2'
                                >
                                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                                </p>
                            </div>
                            <div>
                                <Image
                                    src='/assets/s2-gy-4.png'
                                    width="40"
                                    height="40"
                                    alt='s2-gy-4'
                                />
                                <p
                                    className='text-2xl mt-3 leading-10 pb-2'
                                >
                                    Development
                                </p>
                                <p
                                    className='text-sm	text-gray3 mt-4 leading-6 pb-2'
                                >
                                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* View our projects */}
                <div
                    className='bg-white px-32 py-24'
                >
                    <div
                        className='flex items-center justify-between mb-16'
                    >
                        <p
                            className='text-green1 text-4.5xl 2xl:text-5xl leading-12 pb-3 2xl:pb-4'
                        >
                            View our projects
                        </p>
                        <Link href=''>
                            <div
                                className='flex cursor-pointer'
                            >
                                <p
                                    className='text-green1 text-sm leading-6 mr-5'
                                >
                                    View More
                                </p>
                                <Image
                                    src='/assets/right-arrow-green.svg'
                                    width="19"
                                    height="9"
                                    alt='right-arrow-green'
                                />
                            </div>
                        </Link>
                    </div>
                    <div
                        className='grid-container grid grid-cols-3 gap-7'
                    >
                        <div
                            className="relative col-span-2 bg-section3-img-1 bg-cover bg-no-repeat bg-center h-124">
                            <div
                                className='absolute top-0 bottom-0 left-0 w-47/100 z-10 px-9'
                                style={{
                                    background: 'linear-gradient(329.39deg, #2CBC87 -10.96%, rgba(28, 30, 83, 0.42) 103.96%)',
                                }}
                            >
                                <p
                                    className='text-white text-2xl leading-9 mt-62.4'
                                >
                                    Workhub office Webflow Webflow Design
                                </p>
                                <p
                                    className='text-white text-sm leading-6 mt-3'
                                >
                                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
                                </p>
                                <Link href=''>
                                    <div
                                        className='flex mt-8 cursor-pointer'
                                    >
                                        <p
                                            className='text-yellow2 text-sm leading-6 mr-5'
                                        >
                                            View project
                                        </p>
                                        <Image
                                            src='/assets/right-arrow-yellow.svg'
                                            width="19"
                                            height="9"
                                            alt='right-arrow-yellow'
                                        />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div
                            className='col-span-1 grid grid-rows-2 gap-5'
                        >
                            <div className='relative row-span-1 bg-section3-img-2 bg-cover bg-no-repeat bg-center'>
                                <div
                                    className='absolute top-0 bottom-0 left-0 right-0 z-10 px-9'
                                    style={{
                                        background: 'linear-gradient(329.39deg, #2CBC87 -10.96%, rgba(28, 30, 83, 0.42) 103.96%)',
                                    }}
                                >
                                    <p
                                        className='text-white text-2xl leading-9 mt-25.6 w-3/4'
                                    >
                                        Unisaas Website
                                        Design
                                    </p>
                                    <Link href=''>
                                        <div
                                            className='flex mt-2 cursor-pointer'
                                        >
                                            <p
                                                className='text-yellow2 text-sm leading-6 mr-5'
                                            >
                                                View project
                                            </p>
                                            <Image
                                                src='/assets/right-arrow-yellow.svg'
                                                width="19"
                                                height="9"
                                                alt='right-arrow-yellow'
                                            />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='row-span-1 bg-section3-img-3 bg-cover bg-no-repeat bg-center'/>
                        </div>
                    </div>
                </div>

                {/* Design that solves problems */}
                <div
                    className='flex flex-col items-center bg-gray2 px-32 py-24'
                >
                    <p
                        className='text-green1 text-sm mb-2.5'
                    >
                        Features
                    </p>
                    <p
                        className='text-green1 text-center text-4.5xl leading-14 mb-2.5 w-126.2 mb-28'
                    >
                        Design that solves problems, one product at a time
                    </p>
                    <div
                        className='grid grid-cols-3 grid-rows-2 gap-y-5 gap-x-6'
                    >
                        <div
                            className='py-12 px-10 bg-white'
                        >
                            <Image
                                src='/assets/group.png'
                                width="32"
                                height="28"
                                alt='group'
                            />
                            <p
                                className='text-green1 text-xl leading-7 mt-5'
                            >
                                Uses Client First
                            </p>
                            <p
                                className='text-gray3 text-sm leading-7 mt-2.5'
                            >
                                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib
                                turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                            </p>
                        </div>
                        <div
                            className='py-12 px-10 bg-white'
                        >
                            <Image
                                src='/assets/check.png'
                                width="32"
                                height="32"
                                alt='check'
                            />
                            <p
                                className='text-green1 text-xl leading-7 mt-5'
                            >
                                Two Free Revision Round
                            </p>
                            <p
                                className='text-gray3 text-sm leading-7 mt-2.5'
                            >
                                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib
                                turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                            </p>
                        </div>
                        <div
                            className='py-12 px-10 bg-white'
                        >
                            <Image
                                src='/assets/pen-ruler.png'
                                width="35"
                                height="35"
                                alt='pen-ruler'
                            />
                            <p
                                className='text-green1 text-xl leading-7 mt-5'
                            >
                                Template Customization
                            </p>
                            <p
                                className='text-gray3 text-sm leading-7 mt-2.5'
                            >
                                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib
                                turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                            </p>
                        </div>
                        <div
                            className='py-12 px-10 bg-white'
                        >
                            <Image
                                src='/assets/support.png'
                                width="35"
                                height="35"
                                alt='support'
                            />
                            <p
                                className='text-green1 text-xl leading-7 mt-5'
                            >
                                24/7 Support
                            </p>
                            <p
                                className='text-gray3 text-sm leading-7 mt-2.5'
                            >
                                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib
                                turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                            </p>
                        </div>
                        <div
                            className='py-12 px-10 bg-white'
                        >
                            <Image
                                src='/assets/clock.png'
                                width="35"
                                height="35"
                                alt='clock'
                            />
                            <p
                                className='text-green1 text-xl leading-7 mt-5'
                            >
                                Quick Delivery
                            </p>
                            <p
                                className='text-gray3 text-sm leading-7 mt-2.5'
                            >
                                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib
                                turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                            </p>
                        </div>
                        <div
                            className='py-12 px-10 bg-white'
                        >
                            <Image
                                src='/assets/hands-on.png'
                                width="34"
                                height="34"
                                alt='hands-on'
                            />
                            <p
                                className='text-green1 text-xl leading-7 mt-5'
                            >
                                Hands-on approach
                            </p>
                            <p
                                className='text-gray3 text-sm leading-7 mt-2.5'
                            >
                                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib
                                turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                            </p>
                        </div>
                    </div>
                </div>

                {/* What our clients say about us */}
                <div
                    className='flex justify-between bg-gray4 px-32 py-24'
                >
                    <div className='w-27/100'>
                        <p
                            className='text-3xl text-green1 leading-11 mb-3'
                        >
                            What our clients say about us
                        </p>
                        <p
                            className='text-sm text-gray3 leading-6'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
                        </p>
                    </div>
                    <div className='w-63/100'>
                        <p
                            className='text-3xl text-green1 leading-11 mb-8'
                        >
                            {testimonies[currentTestimoniesPage - 1].text}
                        </p>
                        <div
                            className='flex justify-between'
                        >
                            <div className='flex items-center'>
                                <div className='rounded-full h-12 w-12 overflow-hidden mr-2.5'>
                                    <Image
                                        src={`/assets/${testimonies[currentTestimoniesPage - 1].profilePicture}`}
                                        width="52"
                                        height="52"
                                        alt='profilePicture'
                                    />
                                </div>
                                <div
                                    className=''
                                >
                                    <p
                                        className='text-green1 text-base'
                                    >
                                        {testimonies[currentTestimoniesPage - 1].name}
                                    </p>
                                    <p
                                        className='text-xsm'
                                    >
                                        {testimonies[currentTestimoniesPage - 1].occupation}
                                    </p>
                                </div>
                            </div>
                            <div
                                className='flex'
                            >
                                <div
                                    className={`flex items-center justify-center pr-1 mr-2 w-10 h-10 rounded-full cursor-pointer ${isFirstTestimoniesPage ? 'bg-white' : 'bg-black'}`}
                                    onClick={this._decrementTestimoniesPage}
                                >
                                    {
                                        isFirstTestimoniesPage ?
                                            <Image
                                                src='/assets/left-green.png'
                                                width="13"
                                                height="22"
                                                alt='left-green'
                                            /> : <Image
                                                src='/assets/left-white.png'
                                                width="13"
                                                height="22"
                                                alt='left-white'
                                            />
                                    }
                                </div>
                                <div
                                    className={`flex items-center justify-center pl-1 w-10 h-10 rounded-full cursor-pointer ${isLastTestimoniesPage ? 'bg-white' : 'bg-black'}`}
                                    onClick={this._incrementTestimoniesPage}
                                >
                                    {
                                        isLastTestimoniesPage ?
                                            <Image
                                                src='/assets/right-green.png'
                                                width="13"
                                                height="22"
                                                alt='right-green'
                                            /> : <Image
                                                src='/assets/right-white.png'
                                                width="13"
                                                height="22"
                                                alt='right-white'
                                            />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Frequently asked questions */}
                <div
                    className='flex justify-between bg-white px-32 py-24'
                >
                    <div
                        className='flex min-w-full'
                    >
                        <div
                            className='w-1/4'
                        >
                            <p
                                className='text-3xl text-green1 leading-11 mb-3'
                            >
                                Frequently asked questions
                            </p>
                            <p
                                className='text-sm text-gray5 leading-6 '
                            >
                                Contact us for more info
                            </p>
                        </div>
                        <div
                            className='ml-28 w-3/4 mt-2'
                        >
                            {questions.map((question, index) => (
                                <div
                                    key={question.id}
                                    className=''
                                >
                                    <div
                                        className={`flex items-center grid grid-container grid-cols-10 gap-x-12 ${index < questionsLength - 1 ? 'border-b-2' : ''} ${index === 0 ? 'pb-6' : 'py-6'}`}
                                    >
                                        <p
                                            className='col-span-1 text-xl text-green1 leading-7'
                                        >
                                            {index < 9 ? `0${index + 1}` : index + 1}
                                        </p>
                                        <p
                                            className='col-span-8 text-xl text-green1 leading-7'
                                        >
                                            {question.question}
                                        </p>
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
                </div>

                {/* Building stellar websites for early startups */}
                <div
                    className='bg-white px-32 pb-14'
                >
                    <div
                        className='w-full flex bg-green1'
                    >
                        <div
                            className='bg-section6-img bg-cover bg-no-repeat bg-center h-131.2 w-51/100'
                        >
                            <div
                                className='bg-green2 w-full h-full p-20'
                            >
                                <p
                                    className='text-4.75xl text-white leading-15 mb-5 font-medium'
                                >
                                    Building stellar websites for early startups
                                </p>
                                <p
                                    className='text-base text-white leading-6 mb-5'
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua ut enim.
                                </p>
                            </div>
                        </div>
                        <div
                            className='w-49/100 pt-20 px-20'
                        >
                            <p
                                className='text-2.5xl text-white leading-10 mb-4 leading-5'
                            >
                                Send inquiry
                            </p>
                            <p
                                className='text-sm text-gray2 mb-8'
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore.
                            </p>
                            <input
                                value={name}
                                className='w-full h-12.8 rounded-lg bg-green1 text-white placeholder-gray4 text-xsm placeholder-xs border-1.5 border-gray7 px-7 outline-0 mb-3'
                                placeholder='Your Name'
                                onChange={this._onInputValueChange('name')}
                            />
                            <input
                                value={email}
                                className='w-full h-12.8 rounded-lg bg-green1 text-white placeholder-gray4 text-xsm border-1.5 border-gray7 px-7 outline-0 mb-3'
                                placeholder='Email'
                                onChange={this._onInputValueChange('email')}
                            />
                            <input
                                value={designURL}
                                className='w-full h-12.8 rounded-lg bg-green1 text-white placeholder-gray4 text-xsm placeholder-xs border-1.5 border-gray7 px-7 outline-0 mb-8'
                                placeholder='Paste your Figma design URL'
                                onChange={this._onInputValueChange('designURL')}
                            />
                            <button
                                className='rounded-full bg-yellow2 h-12.8 w-full text-sm mb-4.5'
                            >
                                Send an Inquiry
                            </button>
                            <Link
                                href=''
                            >
                                <div
                                    className='flex justify-center cursor-pointer'
                                >
                                    <p
                                        className='text-white text-sm mr-5'
                                    >
                                        Get in touch with us
                                    </p>
                                    <Image
                                        src='/assets/right-arrow-white.svg'
                                        width="19"
                                        height="9"
                                        alt='right-arrow-white'
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/*Our blog*/}
                <div
                    className='bg-white px-32 pb-14'
                >
                    <p
                        className='text-4.5xl text-green1 leading-13 mb-12.8'
                    >
                        Our blog
                    </p>
                    <div
                        className='grid grid-cols-3 gap-6'
                    >
                        {
                            blogArticles.map(blogArticle => (
                                <div
                                    key={blogArticle.id}
                                    className='col-span-1'
                                >
                                    <div
                                        className='bg-cover bg-no-repeat bg-center h-57 mb-8'
                                        style={{
                                            backgroundImage: `url(/assets/${blogArticle.imageURL})`
                                        }}
                                    />
                                    <p
                                        className='text-xsm text-green1 mb-3'
                                    >
                                        {moment(blogArticle.date, 'mm-dd-yyyy').format('DD MMM YYYY')}
                                    </p>
                                    <p
                                        className='text-xl text-green1 leading-6 mb-3'
                                    >
                                        {blogArticle.title}
                                    </p>
                                    <p
                                        className='text-xsm text-gray3 leading-6 mb-6.5'
                                    >
                                        {blogArticle.preview}
                                    </p>
                                    <Link
                                        href=''
                                    >
                                        <div
                                            className='flex cursor-pointer'
                                        >
                                            <p
                                                className='text-green1 text-xsm mr-5'
                                            >
                                                Read More
                                            </p>
                                            <Image
                                                src='/assets/right-arrow-green.svg'
                                                width="19"
                                                height="9"
                                                alt='right-arrow-green'
                                            />
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* Footer */}
                <div
                    className='bg-green1 px-40 py-21.8 '
                >
                    <div
                        className='flex justify-between px-14.6 pb-10 border-b-px border-white006'
                    >
                        <div
                            className='w-68/100 grid grid-cols-3'
                        >
                            <div
                                className='col-span-1'
                            >
                                <p
                                    className='text-xsm leading-6 text-white mb-3'
                                >
                                    Product
                                </p>
                                <p
                                    className='text-xsm leading-5 text-white07 mb-2.5'
                                >
                                    Diam orci
                                </p>
                                <p
                                    className='text-xsm leading-5 text-white07 mb-2.5'
                                >
                                    Mi feugiat
                                </p>
                                <p
                                    className='text-xsm leading-5 text-white07 mb-2.5'
                                >
                                    Netus fermentum
                                </p>
                                <p
                                    className='text-xsm leading-5 text-white07 mb-2.5'
                                >
                                    Suspendisse viverra
                                </p>
                                <p
                                    className='text-xsm leading-5 text-white07 mb-2.5'
                                >
                                    Id dolor
                                </p>
                                <p
                                    className='text-xsm leading-5 text-white07 mb-2.5'
                                >
                                    Id dolor
                                </p>
                            </div>
                            <div
                                className='col-span-1'
                            >
                                <p
                                    className='text-xsm leading-6 text-white mb-3'
                                >
                                    Information
                                </p>
                                <p
                                    className='text-xsm leading-5 text-white07 mb-2.5'
                                >
                                    Nibh
                                </p>
                                <p
                                    className='text-xsm leading-5 text-white07 mb-2.5'
                                >
                                    Egestas
                                </p>
                                <p
                                    className='text-xsm leading-5 text-white07 mb-2.5'
                                >
                                    Dictum
                                </p>
                            </div>
                            <div
                                className='col-span-1'
                            >
                                <p
                                    className='text-xsm leading-6 text-white mb-3'
                                >
                                    Company
                                </p>
                                <p
                                    className='text-xsm leading-5 text-white07 mb-2.5'
                                >
                                    Id maecenas
                                </p>
                                <p
                                    className='text-xsm leading-5 text-white07 mb-2.5'
                                >
                                    Id orci
                                </p>
                                <p
                                    className='text-xsm leading-5 text-white07 mb-2.5'
                                >
                                    Magna ultricies
                                </p>
                                <p
                                    className='text-xsm leading-5 text-white07 mb-2.5'
                                >
                                    Quis risus
                                </p>
                            </div>
                        </div>
                        <div
                            className='bg-yellow2 w-67.6 h-51.2 py-6 px-8'
                        >
                            <p
                                className='text-xsm leading-6 pb-3.5'
                            >
                                Subscribe
                            </p>
                            <div
                                className='flex w-full border-px border-gray9 rounded-md mb-3.5'
                            >
                                <input
                                    className='grow rounded-l-md px-3 text-xs text-gray8 placeholder-gray8 outline-0	'
                                    placeholder='Email address'
                                    value={subscriptionEmail}
                                    onChange={event => this.setState(() => ({subscriptionEmail: event.target.value}))}
                                />
                                <button
                                    className='w-10 h-10 rounded-r-md bg-green1'
                                    onClick={this._onSubscribe}
                                >
                                    <Image
                                        src='/assets/right-white.png'
                                        width="5"
                                        height="10"
                                        alt='left-green'
                                    />
                                </button>
                            </div>
                            <p
                                className='text-xxs text-gray3'
                            >
                                Gravida sed justo, justo, id est et. Amet tristique convallis sed porttitor nullam eu
                                ut. Duis et odio aliquam bibendum. Metus et lectus id viverra fringilla magna morbi.
                            </p>
                        </div>
                    </div>
                    <div
                        className='flex justify-between mt-10.8'
                    >
                        <p
                            className='text-xs text-white'
                        >
                            Logo Here
                        </p>
                        <div
                            className='flex'
                        >
                            <Link href=''>
                                <p
                                    className='text-xxs text-white mr-7'
                                >
                                    Terms
                                </p>
                            </Link>
                            <Link href=''>
                                <p
                                    className='text-xxs text-white mr-7'
                                >
                                    Privacy
                                </p>
                            </Link>

                            <Link href=''>
                                <p
                                    className='text-xxs text-white'
                                >
                                    Cookies
                                </p>
                            </Link>
                        </div>
                        <div
                            className='flex'
                        >
                            <Link href=''>
                                <div
                                    className='cursor-pointer flex items-center justify-center h-7 w-7 border-white01 border-1.5 rounded-full mr-3'
                                >
                                    <Image
                                        src='/assets/linkedin.png'
                                        width="16"
                                        height="16"
                                        alt='left-green'
                                    />
                                </div>
                            </Link>
                            <Link href=''>
                                <div
                                    className='cursor-pointer flex items-center justify-center h-7 w-7 border-white01 border-1.5 rounded-full mr-3'
                                >
                                    <Image
                                        src='/assets/facebook.png'
                                        width="16"
                                        height="16"
                                        alt='left-green'
                                    />
                                </div>
                            </Link>
                            <Link href=''>
                                <div
                                    className='cursor-pointer flex items-center justify-center h-7 w-7 border-white01 border-1.5 rounded-full'
                                >
                                    <Image
                                        src='/assets/git-branch.png'
                                        width="16"
                                        height="16"
                                        alt='left-green'
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default withTranslation('common')(ExampleComponent);
