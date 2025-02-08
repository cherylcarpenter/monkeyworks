import Link from 'next/link';

export function ProductBullets({ children, className, bulletOne, bulletTwo, bulletThree, bulletFour, image }) {
    return (
        <div
            className={`productBullets flex content-center items-center flex-wrap w-full justify-center gap-3 lg:gap-6 ${className}`}
        >
            <div className="leftCol col">
                <div className="text-lg lg:text-xl productBullet">
                    <Link href="/about">
                        <span className="bg-primary mr-3 p-2 font-bold text-base text-center text-white lg:text-2xl bulletNumber">
                            1
                        </span>{' '}
                        {bulletOne}
                    </Link>
                </div>
                <div className="flex lg:hidden text-lg lg:text-xl productBullet">
                    <Link href="/about">
                        {bulletTwo}{' '}
                        <span className="bg-primary ml-3 p-2 font-bold text-base text-center text-white lg:text-2xl bulletNumber">
                            2
                        </span>
                    </Link>
                </div>
                <div className="text-lg lg:text-xl productBullet">
                    <Link href="/about">
                        <span className="bg-primary mr-3 p-2 font-bold text-base text-center text-white lg:text-2xl bulletNumber">
                            3
                        </span>{' '}
                        {bulletThree}
                    </Link>
                </div>
                <div className="flex lg:hidden text-lg lg:text-xl productBullet">
                    <Link href="/about">
                        {bulletFour}{' '}
                        <span className="bg-primary ml-3 p-2 font-bold text-base text-center text-white lg:text-2xl bulletNumber">
                            4
                        </span>
                    </Link>{' '}
                </div>
            </div>
            <div className="productFeature">
                <img src={image} alt="" />
            </div>
            <div className="rightCol col">
                <div className="text-lg lg:text-xl productBullet">
                    <Link href="/about">
                        {bulletTwo}{' '}
                        <span className="bg-primary ml-3 p-2 font-bold text-base text-center text-white lg:text-2xl bulletNumber">
                            2
                        </span>
                    </Link>
                </div>
                <div className="text-lg lg:text-xl productBullet">
                    <Link href="/about">
                        {bulletFour}{' '}
                        <span className="bg-primary ml-3 p-2 font-bold text-base text-center text-white lg:text-2xl bulletNumber">
                            4
                        </span>
                    </Link>{' '}
                </div>
            </div>
        </div>
    );
}
