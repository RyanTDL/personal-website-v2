import { Image } from 'next/image';

export default function Page() {
    return (
        <div>
            <div className="w-96 h-96 rounded-full bg-gradient-radial from-[#763CAC] to-[#320f8500]">
                <Image 
                    src="/public/image.svg"
                    alt="Me" 
                    className="rounded-full" 
                />
            </div>
            <p>A software engineer</p>
            <p>who stares at colourful letter</p>
        </div>
    );
}