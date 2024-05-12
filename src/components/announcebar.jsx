import { faLocationDot, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

function Announcebar() {
    return (
        <div className='hidden md:flex justify-between bg-ylo pt-2 popp container mx-auto px-7 fs-[12px]'>
            <div >
                <p className='font-normal text-sm'>Need help? Call us: (+98) 0234 456 789</p>
            </div>
            <div className='flex justify-between'>
                <Link href="#">
                    <div className='flex mr-7'>
                        <div className='me-5'>
                            <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        <p className='font-normal text-sm'>
                            Our store
                        </p>
                    </div>
                </Link>
                <Link href="#">
                    <div className='flex'>
                        <div className='me-5'>
                            <FontAwesomeIcon icon={faTruck} />
                        </div>
                        <p className='font-normal text-sm'>Track your order</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Announcebar


// /* Need help? Call us: (+98) 0234 456 789 */

// width: 273px;
// height: 21px;

// font-family: 'Poppins';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 21px;
// /* identical to box height */

// color: #292D32;


// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
