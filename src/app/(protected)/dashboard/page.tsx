import Link from "next/link";

function DashboardPage() {
    return (
        <main className="flex flex-col items-center gap-10 py-20 px-2 container mx-auto">
            <h1 className="text-3xl text-primary-text text-center font-bold">What is your target for today?</h1>
            <div className="w-full max-w-lg">
                <ul className="flex flex-col gap-4">
                    <li className="bg-secondary-bg border border-primary-stroke rounded-xl px-6 py-5 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:border-primary-text/30">
                        <Link href="/dashboard/nouns" className="grid grid-cols-[auto_1fr] items-center gap-x-4" aria-labelledby="noun-title noun-description">
                            <svg className="row-span-2 w-12 h-12" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <g clipPath="url(#clip0_319_93)">
                                    <path d="M57 50.6667C57 52.3464 56.3327 53.9573 55.145 55.145C53.9573 56.3327 52.3464 57 50.6667 57H6.33333C4.65363 57 3.04272 56.3327 1.85499 55.145C0.66726 53.9573 0 52.3464 0 50.6667V6.33333C0 4.65363 0.66726 3.04272 1.85499 1.85499C3.04272 0.66726 4.65363 0 6.33333 0L50.6667 0C52.3464 0 53.9573 0.66726 55.145 1.85499C56.3327 3.04272 57 4.65363 57 6.33333V50.6667Z" fill="#3B88C3"/>
                                    <path d="M13.6031 14.4965C13.6031 12.0423 15.1738 10.668 17.286 10.668C18.2186 10.668 19.7401 11.4042 20.3798 12.2877L35.9424 33.0547H36.0406V14.4965C36.0406 12.0423 37.6112 10.668 39.7202 10.668C41.8324 10.668 43.4031 12.0423 43.4031 14.4965V42.3805C43.4031 44.8363 41.8324 46.209 39.7202 46.209C38.7892 46.209 37.3167 45.4728 36.628 44.5909L21.0654 24.0693H20.9672V42.3805C20.9672 44.8363 19.3966 46.209 17.2844 46.209C15.1722 46.209 13.6016 44.8363 13.6016 42.3805L13.6031 14.4965Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_319_93">
                                        <rect width="57" height="57" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <h2 className="text-xl font-bold text-primary-text">Nouns</h2>
                            <p className="col-start-2 row-start-2 text-primary-text/70">Learn nouns and their meaning</p>
                        </Link>
                    </li>
                    <li className="bg-secondary-bg border border-primary-stroke rounded-xl px-6 py-5 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:border-primary-text/30">
                        <Link href="/dashboard/verbs" className="grid grid-cols-[auto_1fr] items-center gap-x-4" aria-labelledby="noun-title noun-description">
                            <svg className="row-span-2 w-12 h-12" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <g clipPath="url(#clip0_319_103)">
                                    <path d="M57 50.6667C57 52.3464 56.3327 53.9573 55.145 55.145C53.9573 56.3327 52.3464 57 50.6667 57H6.33333C4.65363 57 3.04272 56.3327 1.85499 55.145C0.66726 53.9573 0 52.3464 0 50.6667V6.33333C0 4.65363 0.66726 3.04272 1.85499 1.85499C3.04272 0.66726 4.65363 0 6.33333 0L50.6667 0C52.3464 0 53.9573 0.66726 55.145 1.85499C56.3327 3.04272 57 4.65363 57 6.33333V50.6667Z" fill="#3B88C3"/>
                                    <path d="M14.1176 16.0181C13.8813 15.4422 13.7644 14.8243 13.774 14.202C13.774 12.1405 15.5901 10.668 17.5534 10.668C19.2238 10.668 20.2546 11.7478 20.8911 13.0731L28.5006 33.4949L36.1117 13.0731C36.7482 11.7478 37.7789 10.668 39.4477 10.668C41.4111 10.668 43.2272 12.1405 43.2272 14.202C43.2272 14.8891 43.1322 15.38 42.8836 16.0181L32.1343 43.3638C31.4947 44.9345 30.6602 46.2106 28.5006 46.2106C26.3409 46.2106 25.5065 44.9345 24.8668 43.3638L14.1176 16.0181Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_319_103">
                                        <rect width="57" height="57" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <h2 className="text-xl font-bold text-primary-text">Verbs</h2>
                            <p className="col-start-2 row-start-2 text-primary-text/70">Master verb conjugations</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </main>
    );
}

export default DashboardPage;