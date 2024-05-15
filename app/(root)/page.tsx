import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

export default function Home() {
  const loggedIn = {firstName:'Meiman', lastName:"Jaya", email:'contact@gmail.com'};
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || 'Guest'}
            subtext = "Assess and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12605.32}
          />
        </header>
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[
          {currentBalance: 123.334},
          {currentBalance: 123.433}
        ]} 
        /> 
    </section>
  )
}
