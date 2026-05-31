#![no_std]

use soroban_sdk::{contract, contractimpl, Env};

#[contract]
pub struct PaymentTracker;

#[contractimpl]
impl PaymentTracker {
    pub fn hello(env: Env) -> u32 {
        1
    }
}
