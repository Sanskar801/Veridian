import React from 'react'
import personImg from "../assets/medium-shot-smiley-man-posing.jpg"
import FaqCollapsible from '../components/FaqCollapsible'

const ContactPage = () => {
    return (
        <div className='contact-page h-fit'>
            <div className="pt-20 sm:pt-32 md:pt-48">

                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-center mb-8 px-4">Let's Talk</h1>

                <section className="contact-form grid grid-cols-1 lg:grid-cols-3 h-fit text-gray-900">
                    {/* Left section */}
                    <div className="flex flex-col justify-center px-4 sm:px-8 lg:pl-16 space-y-4 mb-8 lg:mb-0">
                        <p className="text-base sm:text-lg max-w-sm">
                            Whether it's a new project or a quick question, we're here to connect.
                        </p>
                        <div className="flex items-center space-x-3">
                            <img src={personImg} alt="CEO Avatar" className="rounded-full w-12 h-12" />
                            <div>
                                <p className="font-semibold">Andrew Koktò</p>
                                <p className="text-sm text-gray-500">Founder and CEO</p>
                            </div>
                        </div>
                    </div>

                    {/* Right section */}
                    <div className="lg:col-span-2 flex flex-col justify-center bg-gray-50 p-4 sm:p-8 md:p-12 lg:p-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">

                            <div className="flex flex-col justify-between space-y-6 md:space-y-10 h-full">
                                <a href='mailto:hello@veridian.com' className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold break-all">hello@veridian</a>
                                <a href="#" className="text-red-500 hover:text-red-600 text-base sm:text-lg">
                                    Instagram
                                </a>
                            </div>

                            {/* Right column (form fields) */}
                            <form className="flex flex-col space-y-4 max-w-md w-full">
                                <input
                                    type="text"
                                    placeholder="Name *"
                                    className="border-b border-gray-300 bg-transparent py-2 outline-none text-sm sm:text-base"
                                />
                                <input
                                    type="email"
                                    placeholder="E-mail *"
                                    className="border-b border-gray-300 bg-transparent py-2 outline-none text-sm sm:text-base"
                                />
                                <textarea
                                    placeholder="Message (Tell us about your project)"
                                    className="border-b border-gray-300 bg-transparent py-2 outline-none text-sm sm:text-base resize-none"
                                    rows="3"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="cursor-pointer flex items-center space-x-2 text-red-500 hover:text-red-600 transition-colors text-sm sm:text-base"
                                >
                                    <span className="text-lg">↳</span>
                                    <span>Get in touch</span>
                                </button>
                            </form>
                        </div>
                    </div>

                </section>

                <section className="contact-closing grid grid-cols-1 lg:grid-cols-3 h-fit text-gray-900 mt-8">

                    <div className="flex flex-col justify-center px-4 sm:px-8 lg:pl-16 space-y-4 mb-6 lg:mb-0">
                        <p className="text-base sm:text-lg max-w-sm">
                            Get in Touch
                        </p>
                    </div>

                    <div className="lg:col-span-2 flex flex-col justify-center p-4 sm:p-8 md:p-12 lg:p-20 gap-3">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">We'd love to hear from you. Whether you're starting a new project, need help refining an idea, or just want to say hello, we're here to help.</p>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700">Fill out the form or reach out via email—we'll get back to you as soon as possible. Let's create something great together.</p>
                    </div>

                </section>

                <section className="faq grid grid-cols-1 lg:grid-cols-3 h-fit text-gray-900 mt-8 px-3 gap-4">

                    <div className="flex flex-col justify-center px-4 sm:px-8 lg:pl-16 space-y-4 mb-6 lg:mb-0">
                        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-4 sm:mb-8">FAQ</h1>
                        <p className="text-sm sm:text-base">We've heard it all. Here's everything you need to know before working with us.</p>
                    </div>

                    <div className="faq-collaplibles w-full lg:col-span-2">
                        <FaqCollapsible
                            ques={"What services does your digital marketing agency offer?"}
                            ans={"We provide SEO, PPC advertising, social media management, content marketing, and email marketing services to help businesses grow online."}
                        />

                        <FaqCollapsible
                            ques={"How long does it take to see results from digital marketing?"}
                            ans={"Results can vary depending on the service and your industry, but typically SEO takes 3-6 months, while PPC and social media campaigns can show results within weeks."}
                        />

                        <FaqCollapsible
                            ques={"Do you create content for websites and social media?"}
                            ans={"Yes, we create high-quality content including blog posts, social media updates, videos, and graphics tailored to your brand and audience."}
                        />

                        <FaqCollapsible
                            ques={"How do you measure the success of a digital marketing campaign?"}
                            ans={"We track key performance indicators like website traffic, conversion rates, ROI, engagement metrics, and search engine rankings to measure campaign success."}
                        />

                        <FaqCollapsible
                            ques={"Can small businesses afford your services?"}
                            ans={"Yes, we offer scalable packages that fit different budgets, ensuring even small businesses can access effective digital marketing strategies."}
                        />
                    </div>
                </section>

                <section className="socail h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex justify-center items-center px-4">
                    <div className="flex items-center justify-center">
                        <div className="flex gap-2 sm:gap-4 p-2">
                            <div className="border-2 rounded-full text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold px-3 sm:px-4 md:px-5">FB</div>
                            <div className="border-2 rounded-full text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold px-3 sm:px-4 md:px-5">IG</div>
                            <div className="border-2 rounded-full text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold px-3 sm:px-4 md:px-5">IN</div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default ContactPage