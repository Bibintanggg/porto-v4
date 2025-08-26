import { BiChevronLeft } from "react-icons/bi";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from 'next/image'

export default function Gallery() {
    return (
        <div className="relative h-full w-full min-h-[200vh] overflow-x-hidden">
            <div className="absolute top-0 left-0 z-[-1] h-screen w-screen 
                  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            </div>

            <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-3 md:px-6 gap-12 md:gap-52">
                <div className="flex flex-col font-mono">
                    <Navbar />

                    <div className=" flex flex-col justify-center items-center gap-8">
                        <div className="flex justify-center items-center gap-8">
                            <Link
                                href="/home"
                                className="bg-white/20 hover:bg-white/30 transition cursor-pointer backdrop-blur-2xl 
                            w-12 h-12 rounded-full flex items-center justify-center"
                            >
                                <BiChevronLeft size={28} />
                            </Link>

                            <div className="flex flex-col">
                                <h1 className="font-mono text-xl">Gallery</h1>
                                <p className="font-sans">From simple moments to meaningful works, all captured here</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">

                            <div className="flex gap-3 ">
                                <Image
                                    src={'/assets/image/us-indi.jpg'}
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                    className="w-52 h-[24rem] rounded-md object-cover" />

                                <div className="flex flex-col gap-3">
                                    <Image
                                        src={'/assets/image/indi-caffee.jpg'}
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                        className="w-full h-52 rounded-md object-cover" />

                                    <Image
                                        src={'/assets/image/btr-62.jpg'}
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                        className="w-full h-40 rounded-md object-cover" />
                                </div>
                            </div>

                            <Image
                                src={'/assets/image/miss.jpg'}
                                width={500}
                                height={500}
                                alt="Picture of the author"
                                className="w-full h-40 rounded-md object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}