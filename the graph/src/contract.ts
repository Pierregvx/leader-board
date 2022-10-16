import { Address, BigInt, log } from "@graphprotocol/graph-ts";
import {
  Contract,
  Paused,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  TokenDeposit,
  TokenDepositAndSwap,
  TokenMint,
  TokenMintAndSwap,
  TokenRedeem,
  TokenRedeemAndRemove,
  TokenRedeemAndSwap,
  TokenRedeemV2,
  TokenWithdraw,
  TokenWithdrawAndRemove,
  Unpaused,
} from "../generated/Contract/Contract";

let ZERO = BigInt.fromI32(0);
import { User } from "../generated/schema";
function loadOrCreateUser(address: Address, fees: BigInt): User {
  let newUser = User.load(address.toHexString());
  if (!newUser) {
    newUser = new User(address.toHexString());
    newUser.deposit = ZERO;
    newUser.swap = ZERO;
    newUser.redeem = ZERO;
    newUser.withdraw = ZERO;
    newUser.removed = ZERO;

    newUser.minted = ZERO;
newUser.volume=ZERO
    newUser.xp=0
    newUser.chains = []
  }

  return newUser;
}

export function handleTokenDeposit(event: TokenDeposit): void {
  const feesunit = event.receipt ? event.receipt!.gasUsed : ZERO;
  let user = loadOrCreateUser(
    event.transaction.from,
    event.transaction.gasPrice
  );
  user.volume += event.params.amount;
let chains = user.chains
  if(!( chains.includes(event.params.chainId)) )chains.push(event.params.chainId)
    user.chains = chains
  user.deposit += event.params.amount;
    user.xp+=30
  user.save();
}

export function handleTokenDepositAndSwap(event: TokenDepositAndSwap): void {
  const feesunit = event.receipt ? event.receipt!.gasUsed : ZERO;
  let user = loadOrCreateUser(
    event.transaction.from,
    event.transaction.gasPrice
  );
  user.xp+=50
  user.volume += event.params.amount;
let chains = user.chains
  if(!( chains.includes(event.params.chainId)) )chains.push(event.params.chainId)
    user.chains = chains  user.deposit += event.params.amount;
  user.swap += event.params.amount;
  
  user.save();
}

export function handleTokenMint(event: TokenMint): void {
  const feesunit = event.receipt ? event.receipt!.gasUsed : ZERO;
  let user = loadOrCreateUser(
    event.transaction.from,
    event.transaction.gasPrice
  );
  user.xp+=40
  user.volume += event.params.amount;

  user.minted += event.params.amount;
  
  user.save();
}

export function handleTokenMintAndSwap(event: TokenMintAndSwap): void {
  const feesunit = event.receipt ? event.receipt!.gasUsed : ZERO;
  let user = loadOrCreateUser(
    event.transaction.from,
    event.transaction.gasPrice
  );
  user.xp+=70;
  user.volume += event.params.amount;

  user.minted += event.params.amount;
  user.swap   += event.params.amount;
  
  user.save();
}

export function handleTokenRedeem(event: TokenRedeem): void {
  const feesunit = event.receipt ? event.receipt!.gasUsed : ZERO;
  let user = loadOrCreateUser(
    event.transaction.from,
    event.transaction.gasPrice
  );
  user.xp+=20
  user.volume += event.params.amount;
  user.redeem += event.params.amount;
let chains = user.chains
  if(!( chains.includes(event.params.chainId)) )chains.push(event.params.chainId)
    user.chains = chains
  user.save();
}

export function handleTokenRedeemAndRemove(event: TokenRedeemAndRemove): void {
  const feesunit = event.receipt ? event.receipt!.gasUsed : ZERO;
  let user = loadOrCreateUser(
    event.transaction.from,
    event.transaction.gasPrice
  );
  user.xp+=35
  user.volume += event.params.amount;

  user.redeem += event.params.amount;
  user.removed += event.params.amount;
let chains = user.chains
  if(!( chains.includes(event.params.chainId)) )chains.push(event.params.chainId)
    user.chains = chains  user.save();
}

export function handleTokenRedeemAndSwap(event: TokenRedeemAndSwap): void {
  const feesunit = event.receipt ? event.receipt!.gasUsed : ZERO;
  let user = loadOrCreateUser(
    event.transaction.from,
    event.transaction.gasPrice
  );
  let chains = user.chains
  if(!( chains.includes(event.params.chainId)) )chains.push(event.params.chainId)
    user.chains = chains
  user.xp+=40
  user.volume += event.params.amount;

  user.redeem += event.params.amount;
  user.swap += event.params.amount;
  user.save();
}

export function handleTokenRedeemV2(event: TokenRedeemV2): void {
  const feesunit = event.receipt ? event.receipt!.gasUsed : ZERO;
  let user = loadOrCreateUser(
    event.transaction.from,
    event.transaction.gasPrice
  );
  user.xp+=35
  user.volume += event.params.amount;
let chains = user.chains
  if(!( chains.includes(event.params.chainId)) )chains.push(event.params.chainId)
    user.chains = chains
  user.redeem += event.params.amount;
  user.save();
}

export function handleTokenWithdraw(event: TokenWithdraw): void {
  const feesunit = event.receipt ? event.receipt!.gasUsed : ZERO;
  let user = loadOrCreateUser(
    event.transaction.from,
    event.transaction.gasPrice
  );
  user.xp+=20
  user.volume += event.params.amount;

  user.withdraw += event.params.amount;
  user.save();
}

export function handleTokenWithdrawAndRemove(
  event: TokenWithdrawAndRemove
): void {
  const feesunit = event.receipt ? event.receipt!.gasUsed : ZERO;
  let user = loadOrCreateUser(
    event.transaction.from,
    event.transaction.gasPrice
  );
  user.volume += event.params.amount;
user.xp+=35
  user.withdraw += event.params.amount;
  user.removed += event.params.amount;
  
  user.save();
}
