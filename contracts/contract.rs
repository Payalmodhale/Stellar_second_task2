#![no_std]

use soroban_sdk::{contract, contractimpl, Env};

#[contract]
pub struct PaymentTracker;

#[contractimpl]
impl PaymentTracker {
    pub fn add_payment(env: Env, amount: u32) -> u32 {
        amount
    }
}
