const hre = require("hardhat");

async function main() {
	// desestructuro signer para tomar 1er elemento de las cuentas
	const [kevin, natu] = await hre.ethers.getSigners();

	// We get the contract to deploy
	// A la factory getContractFactory le pasamos el contracto que toma desde artifacts
	const KevCoin = await hre.ethers.getContractFactory("KevCoin");
	// tomo el address del signer
	const kevcoin = await KevCoin.deploy(20);

	await kevcoin.deployed();
	console.log("KevCoin deployed to:", kevcoin.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
