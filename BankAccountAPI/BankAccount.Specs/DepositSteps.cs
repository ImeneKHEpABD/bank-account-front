using System;
using TechTalk.SpecFlow;

namespace BankAccount.Specs
{
    [Binding]
    public class DepositSteps
    {
        [Given(@"a client has an account")]
        public void GivenAClientHasAnAccount()
        {
            ScenarioContext.Current.Pending();
        }
        
        [Given(@"he wants to deposit an amount of (.*)")]
        public void GivenHeWantsToDepositAnAmountOf(int p0)
        {
            ScenarioContext.Current.Pending();
        }
        
        [When(@"he does deposit")]
        public void WhenHeDoesDeposit()
        {
            ScenarioContext.Current.Pending();
        }
        
        [Then(@"he should be told ""(.*)""")]
        public void ThenHeShouldBeTold(string p0)
        {
            ScenarioContext.Current.Pending();
        }
    }
}
