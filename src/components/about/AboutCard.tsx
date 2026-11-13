interface AboutCardProps {
    readonly profileImageUrl: string;
    readonly name: string;
}

const AboutCard = ({ profileImageUrl, name }: AboutCardProps) => {
    return (
        <div className="flex justify-center md:justify-start">
            <img
                src={profileImageUrl}
                alt={name}
                className="h-48 w-48 rounded-full object-cover object-[center_18%] sm:h-60 sm:w-60"
            />
        </div>
    );
};

export default AboutCard;
