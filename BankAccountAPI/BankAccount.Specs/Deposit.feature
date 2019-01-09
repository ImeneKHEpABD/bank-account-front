Feature: Deposit
  In order to save money
  As a bank client
  I want to make a deposit in my account
@mytag
Scenario: Negative amount should be rejected
	Given a client has an account
	And he wants to deposit an amount of -100
	When he does deposit
	Then he should be told " :The amount should not be negative!!"
