import {BsShieldFillCheck} from 'react-icons/bs';
import {BiSearchAlt} from 'react-icons/bi';
import {RiHeart2Fill} from 'react-icons/ri';

const ServiceCard = ({color,title,icon,subTitle}) => (
<div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full  flex justify-center items-center ${color}`}>
        {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
        <h3 className="mt-2 text-green-400 text-xl">{title}</h3>
        <p className="text-white mt-2 text-sm md:w-9/12 ">{subTitle}</p>
    </div>
</div>
)

const Services = () => {
    return (
        <div className="flex w-full justify-center items-center gradient-bg-services">
            <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start">
                    <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">Services that we <br/>Continue to Improve</h1>
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-start items-center">
                <ServiceCard
                    color="bg-[#2952e3]"
                    title="Security Guaranteed"
                    icon={<BsShieldFillCheck fontSize={21} className="text-white"/>}
                    subTitle="Security is always our proority, we maintain privacy and quality"
                />
            </div>
        </div>
    );
}

export default Services;