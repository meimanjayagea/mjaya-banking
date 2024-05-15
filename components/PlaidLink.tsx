import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from './ui/button'

const PlaidLink = ({ user, variant } : PlaidLinkProps) => {
    const router = useRouter()

    return (
    <>
        {variant === 'primary' ? (
            <Button 
                className='plaidlink-primary' 
            >
            Connect Bank  
            </Button> 
        ): variant === 'ghost' ? (
            <Button onClick={() => open()} variant="ghost" className="plaidlink-ghost">
              <Image 
                src="/icons/connect-bank.svg"
                alt="connect bank"
                width={24}
                height={24}
              />
              <p className='hiddenl text-[16px] font-semibold text-black-2 xl:block'>Connect bank</p>
            </Button>
          ): (
            <Button onClick={() => open()} className="plaidlink-default">
              <Image 
                src="/icons/connect-bank.svg"
                alt="connect bank"
                width={24}
                height={24}
              />
              <p className='text-[16px] font-semibold text-black-2'>Connect bank</p>
            </Button>
          )}
      
    </>
  )
}

export default PlaidLink
