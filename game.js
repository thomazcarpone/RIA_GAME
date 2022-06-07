//rename boss par boss et hero par character
//mettre des positions fixes de boss et character
//gestion de mes hp
//afficher le stage
//constante hp boss qui se multiplie par rapport au Stage X
//implémenter les attaques du boss
//demander à l'enseignant pour la gestion des images !!!


//gérer les hitbox des projectiles avec les centres
const DIFFICULTIES=[0.75,1,3];
var currentDifficulty=1;
var bossMultiplier=1;
const CHARACTER_SIZE=90;
const CANVAS_SIZE=700;
const PROJECTILES_SIZE=60;
const BOSS_SIZE=150;
const BOSS_HP=100;
const BOSS_DAMAGE=10;
const CHARACTER_HP=100;
const PROJECTILES_SPEED=4;
const SPEED=256;
    
// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
document.body.appendChild(canvas);

// Background image
const bgImage = new Image();
bgImage.src = "ressources/game/background.png";

//laser boss and projectiles
const prelaser0 = new Image();
prelaser0.src = "ressources/game/prelaser0.png";
const prelaser1 = new Image();
prelaser1.src = "ressources/game/prelaser1.png";
const prelaser2 = new Image();
prelaser2.src = "ressources/game/prelaser2.png";
const laser = new Image();
laser.src = "ressources/game/laser/laser.png";
const projectilesImage = new Image();
projectilesImage.src = "ressources/game/ColereShoot.png";

// Character image
const heroImage = new Image();
heroImage.src = "ressources/game/character.png";
	// dying
const heroDying00 = new Image();
heroDying00.src="ressources/game/Dying/0_Fallen_Angels_Dying_000.png";
const heroDying01 = new Image();
heroDying01.src="ressources/game/Dying/0_Fallen_Angels_Dying_001.png";
const heroDying02 = new Image();
heroDying02.src="ressources/game/Dying/0_Fallen_Angels_Dying_002.png";
const heroDying03 = new Image();
heroDying03.src="ressources/game/Dying/0_Fallen_Angels_Dying_003.png";
const heroDying04 = new Image();
heroDying04.src="ressources/game/Dying/0_Fallen_Angels_Dying_004.png";
const heroDying05 = new Image();
heroDying05.src="ressources/game/Dying/0_Fallen_Angels_Dying_005.png";
const heroDying06 = new Image();
heroDying06.src="ressources/game/Dying/0_Fallen_Angels_Dying_006.png";
const heroDying07 = new Image();
heroDying07.src="ressources/game/Dying/0_Fallen_Angels_Dying_007.png";
const heroDying08 = new Image();
heroDying08.src="ressources/game/Dying/0_Fallen_Angels_Dying_008.png";
const heroDying09 = new Image();
heroDying09.src="ressources/game/Dying/0_Fallen_Angels_Dying_009.png";
const heroDying10 = new Image();
heroDying10.src="ressources/game/Dying/0_Fallen_Angels_Dying_010.png";
const heroDying11 = new Image();
heroDying11.src="ressources/game/Dying/0_Fallen_Angels_Dying_011.png";
const heroDying12 = new Image();
heroDying12.src="ressources/game/Dying/0_Fallen_Angels_Dying_012.png";
const heroDying13 = new Image();
heroDying13.src="ressources/game/Dying/0_Fallen_Angels_Dying_013.png";
const heroDying14 = new Image();
heroDying14.src="ressources/game/Dying/0_Fallen_Angels_Dying_014.png";
const heroDying =[heroDying00,heroDying01,heroDying02,heroDying03,heroDying04,heroDying05,heroDying06,
	heroDying07,heroDying08,heroDying09,heroDying10,heroDying11,heroDying12,heroDying13,heroDying14];
var heroDyingIndice=0;

//doing nothing
const heroIdle00 = new Image();
heroIdle00.src="ressources/game/Idle/0_Fallen_Angels_Idle_000.png";
const heroIdle01 = new Image();
heroIdle01.src="ressources/game/Idle/0_Fallen_Angels_Idle_001.png";
const heroIdle02 = new Image();
heroIdle02.src="ressources/game/Idle/0_Fallen_Angels_Idle_002.png";
const heroIdle03 = new Image();
heroIdle03.src="ressources/game/Idle/0_Fallen_Angels_Idle_003.png";
const heroIdle04 = new Image();
heroIdle04.src="ressources/game/Idle/0_Fallen_Angels_Idle_004.png";
const heroIdle05 = new Image();
heroIdle05.src="ressources/game/Idle/0_Fallen_Angels_Idle_005.png";
const heroIdle06 = new Image();
heroIdle06.src="ressources/game/Idle/0_Fallen_Angels_Idle_006.png";
const heroIdle07 = new Image();
heroIdle07.src="ressources/game/Idle/0_Fallen_Angels_Idle_007.png";
const heroIdle08 = new Image();
heroIdle08.src="ressources/game/Idle/0_Fallen_Angels_Idle_008.png";
const heroIdle09 = new Image();
heroIdle09.src="ressources/game/Idle/0_Fallen_Angels_Idle_009.png";
const heroIdle10 = new Image();
heroIdle10.src="ressources/game/Idle/0_Fallen_Angels_Idle_010.png";
const heroIdle11 = new Image();
heroIdle11.src="ressources/game/Idle/0_Fallen_Angels_Idle_011.png";
const heroIdle12 = new Image();
heroIdle12.src="ressources/game/Idle/0_Fallen_Angels_Idle_012.png";
const heroIdle13 = new Image();
heroIdle13.src="ressources/game/Idle/0_Fallen_Angels_Idle_013.png";
const heroIdle14 = new Image();
heroIdle14.src="ressources/game/Idle/0_Fallen_Angels_Idle_014.png";
const heroIdle15 = new Image();
heroIdle15.src="ressources/game/Idle/0_Fallen_Angels_Idle_015.png";
const heroIdle16 = new Image();
heroIdle16.src="ressources/game/Idle/0_Fallen_Angels_Idle_016.png";
const heroIdle17 = new Image();
heroIdle17.src="ressources/game/Idle/0_Fallen_Angels_Idle_017.png";
const heroIdle = [heroIdle00,heroIdle01,heroIdle02,heroIdle03,heroIdle04,heroIdle05,heroIdle06,heroIdle07,heroIdle08,heroIdle09,heroIdle10,
	heroIdle11,heroIdle12,heroIdle13,heroIdle14,heroIdle15,heroIdle16,heroIdle17]
var heroIdleIndice=0;

//is moving
const heroRunning00 = new Image();
heroRunning00.src="ressources/game/Running/0_Fallen_Angels_Running_000.png";
const heroRunning01 = new Image();
heroRunning01.src="ressources/game/Running/0_Fallen_Angels_Running_001.png";
const heroRunning02 = new Image();
heroRunning02.src="ressources/game/Running/0_Fallen_Angels_Running_002.png";
const heroRunning03 = new Image();
heroRunning03.src="ressources/game/Running/0_Fallen_Angels_Running_003.png";
const heroRunning04 = new Image();
heroRunning04.src="ressources/game/Running/0_Fallen_Angels_Running_004.png";
const heroRunning05 = new Image();
heroRunning05.src="ressources/game/Running/0_Fallen_Angels_Running_005.png";
const heroRunning06 = new Image();
heroRunning06.src="ressources/game/Running/0_Fallen_Angels_Running_006.png";
const heroRunning07 = new Image();
heroRunning07.src="ressources/game/Running/0_Fallen_Angels_Running_007.png";
const heroRunning08 = new Image();
heroRunning08.src="ressources/game/Running/0_Fallen_Angels_Running_008.png";
const heroRunning09 = new Image();
heroRunning09.src="ressources/game/Running/0_Fallen_Angels_Running_009.png";
const heroRunning10 = new Image();
heroRunning10.src="ressources/game/Running/0_Fallen_Angels_Running_010.png";
const heroRunning11 = new Image();
heroRunning11.src="ressources/game/Running/0_Fallen_Angels_Running_011.png";
const heroRunning=[heroRunning00,heroRunning01,heroRunning02,heroRunning03,heroRunning04,heroRunning05,
	heroRunning06,heroRunning07,heroRunning08,heroRunning09,heroRunning10,heroRunning11]
var heroRunningIndice=0;
var isRunning=false;

//is attacking
const heroSlashing00 = new Image();
heroSlashing00.src ="ressources/game/Slashing/0_Fallen_Angels_Slashing_000.png";
const heroSlashing01 = new Image();
heroSlashing01.src ="ressources/game/Slashing/0_Fallen_Angels_Slashing_001.png";
const heroSlashing02 = new Image();
heroSlashing02.src ="ressources/game/Slashing/0_Fallen_Angels_Slashing_002.png";
const heroSlashing03 = new Image();
heroSlashing03.src ="ressources/game/Slashing/0_Fallen_Angels_Slashing_003.png";
const heroSlashing04 = new Image();
heroSlashing04.src ="ressources/game/Slashing/0_Fallen_Angels_Slashing_004.png";
const heroSlashing05 = new Image();
heroSlashing05.src ="ressources/game/Slashing/0_Fallen_Angels_Slashing_005.png";
const heroSlashing06 = new Image();
heroSlashing06.src ="ressources/game/Slashing/0_Fallen_Angels_Slashing_006.png";
const heroSlashing07 = new Image();
heroSlashing07.src ="ressources/game/Slashing/0_Fallen_Angels_Slashing_007.png";
const heroSlashing08 = new Image();
heroSlashing08.src ="ressources/game/Slashing/0_Fallen_Angels_Slashing_008.png";
const heroSlashing09 = new Image();
heroSlashing09.src ="ressources/game/Slashing/0_Fallen_Angels_Slashing_009.png";
const heroSlashing10 = new Image();
heroSlashing10.src ="ressources/game/Slashing/0_Fallen_Angels_Slashing_010.png";
const heroSlashing11 = new Image();
heroSlashing11.src ="ressources/game/Slashing/0_Fallen_Angels_Slashing_011.png";
const heroSlashing=[heroSlashing00,heroSlashing01,heroSlashing02,heroSlashing03,heroSlashing04,heroSlashing05,
	heroSlashing06,heroSlashing07,heroSlashing08,heroSlashing09,heroSlashing10,heroSlashing11,];
var heroSlashingIndice=0;
var isSlashing=false;

//is moving and attacking
const heroRS00 = new Image();
heroRS00.src ="ressources/game/Run Slashing/0_Fallen_Angels_Run Slashing_000.png";
const heroRS01 = new Image();
heroRS01.src ="ressources/game/Run Slashing/0_Fallen_Angels_Run Slashing_001.png";
const heroRS02 = new Image();
heroRS02.src ="ressources/game/Run Slashing/0_Fallen_Angels_Run Slashing_002.png";
const heroRS03 = new Image();
heroRS03.src ="ressources/game/Run Slashing/0_Fallen_Angels_Run Slashing_003.png";
const heroRS04 = new Image();
heroRS04.src ="ressources/game/Run Slashing/0_Fallen_Angels_Run Slashing_004.png";
const heroRS05 = new Image();
heroRS05.src ="ressources/game/Run Slashing/0_Fallen_Angels_Run Slashing_005.png";
const heroRS06 = new Image();
heroRS06.src ="ressources/game/Run Slashing/0_Fallen_Angels_Run Slashing_006.png";
const heroRS07 = new Image();
heroRS07.src ="ressources/game/Run Slashing/0_Fallen_Angels_Run Slashing_007.png";
const heroRS08 = new Image();
heroRS08.src ="ressources/game/Run Slashing/0_Fallen_Angels_Run Slashing_008.png";
const heroRS09 = new Image();
heroRS09.src ="ressources/game/Run Slashing/0_Fallen_Angels_Run Slashing_009.png";
const heroRS10 = new Image();
heroRS10.src ="ressources/game/Run Slashing/0_Fallen_Angels_Run Slashing_010.png";
const heroRS11 = new Image();
heroRS11.src ="ressources/game/Run Slashing/0_Fallen_Angels_Run Slashing_011.png";
const heroRS=[heroRS00,heroRS01,heroRS02,heroRS03,heroRS04,heroRS05,heroRS06,
	heroRS07,heroRS08,heroRS09,heroRS10,heroRS11,];
var heroRSIndice=0;

//Gourmandise
const butterImage = new Image();
butterImage.src ="ressources/game/ingredient/butter.png";
const cookieImage = new Image();
cookieImage.src ="ressources/game/ingredient/cookie.png";
const flourImage = new Image();
flourImage.src ="ressources/game/ingredient/flour.png";
const muffinImage = new Image();
muffinImage.src ="ressources/game/ingredient/muffin.png";
const redZoneImage = new Image();
redZoneImage.src ="ressources/game/ingredient/red.png";
const pinsImage = new Image();
pinsImage.src ="ressources/game/ingredient/rolling_pin.png";
const saltImage = new Image();
saltImage.src ="ressources/game/ingredient/salt.png";
const sugarImage = new Image();
sugarImage.src ="ressources/game/ingredient/sugar.png";



// projectiles
const shootImage = new Image();
shootImage.src = "ressources/game/shoot.png";

const shootLImage = new Image();
shootLImage.src = "ressources/game/shoot2.png";

const colereShoot = new Image();
colereShoot.src = "ressources/game/ColereShoot";

// Game objects

class Fireball{
    constructor(x,y,m){
        this.x = x;
        this.y = y;  
		this.m = m; 
    }
}

class Boss{
	constructor(){
		this.hp=BOSS_HP;
		this.damage = BOSS_DAMAGE;
		this.x = 600;
		this.y = 600;
		this.isCasting=false;
		this.lastCast=new Date();
		this.currentSpell=-1;
		this.targetX=-1;
		this.targetY=-1;
		this.projectiles=[];
		this.hitboxX=0;
		this.hitboxY=0;
	}
}

class Gourmandise extends Boss{
	constructor(){
		super();
		this.name="Gourmandise";
		this.firstRandom=-1;
		this.secondRandom=-1;
		this.bossImage = new Image();
		this.bossImage.src = "ressources/game/gourmandise.png";
		this.pins = [];
		this.muffins = [];
		this.ingredients = [];
	}
	spell(){
		if(this.currentSpell==0){
			return this.gimmeFood();
		} else {
			if (this.currentSpell==1){
				return this.rollingPins();
			}
			else{
				if (this.currentSpell==2){
					return this.muffin();
				}
			}
		}
	}
	gimmeFood(){
		return "food";
	}
	rollingPins(){
		return "pins";
	}
	muffin(){
		return "muffin";
	}

}

class RollingPin{
	constructor(y,size,sens){
		this.x= sens ? 0 : CANVAS_SIZE-40;
		this.y=y;
		this.size=size;
		this.sens=sens;
		this.speed=Math.random()*5+1;
	}
}

class Projectiles{
	constructor(x,y,i){
		this.x=x;
		this.y=y;
		this.indice=i;
		this.hasTouched=false;
		//8 directions for colère's projectiles
		this.variationX=[0,1,1,1,0,-1,-1,-1];
		this.variationY=[-1,-1,0,1,1,1,0,-1];
		//target for Gourmandise's cookie
		this.varX=0;
		this.varY=0;
		
		let pente = (hero.hitboxY-this.y-PROJECTILES_SIZE*0.33)/(hero.hitboxX-this.x-PROJECTILES_SIZE*0.33); //0.33 is the muffin size /2
		if (pente <=1.0 && pente>=-1.0){
			this.varX= hero.hitboxX<this.x ? -1 : 1;
			this.varY= Math.abs(pente)*(hero.hitboxY<this.y ? -1 : 1);		
		}else{
			this.varX= (hero.hitboxX<x ? -1 : 1)/Math.abs(pente);
			this.varY= hero.hitboxY<y ? -1 : 1;
		}
	}

	
}

class Colere extends Boss{
	constructor(){
		super();
		this.name="Colere";
		this.laserX=-1;
		this.laserY=-1;
		this.laserS=false;	
		this.laserL=1;
		this.bossImage = new Image();
		this.bossImage.src = "ressources/game/colere.png";
	}
	spell(){
		if(this.currentSpell==0){
			return this.rush();
		} else {
			if (this.currentSpell==1){
				return this.laser();
			}
			else{
				if (this.currentSpell==2){
					return this.arroundProjectiles();
				}
			}
		}
	}
	rush(){
		return "rush";
	}
	laser(){
		return "laser";
	}
	arroundProjectiles(){
		return "projectiles";
	}
}
var damageSound = new Audio("ressources/game/soundEffect/Eat.m4a");
var eatSound = new Audio("ressources/game/soundEffect/Eat.m4a");

class Muffin{
	constructor(){
		this.x=boss.hitboxX-PROJECTILES_SIZE*0.66/2;
		this.y=boss.hitboxY-PROJECTILES_SIZE*0.66/2;
		this.hitboxX=this.x+PROJECTILES_SIZE*0.66/2;
		this.hitboxY=this.y+PROJECTILES_SIZE*0.66/2;
	}
}

class Ingredient{
	constructor(x,y){
		this.x=x;
		this.y=y;
		this.hitboxX=this.x+PROJECTILES_SIZE*0.33;
		this.hitboxY=this.y+PROJECTILES_SIZE*0.33;
	}
}

class Hero {
	constructor(){
		this.health = CHARACTER_HP;
		this.speed = SPEED;
		this.fireballs = [];
		this.lastFireball = new Date();
		this.attackSpeed = 0.6;
		this.fireballDamage = 8;
		this.lastAnimation = new Date();
		this.hitboxX=0;
		this.hitboxY=0;
	}
}

var hero = new Hero();
var throwSpell=false;
var boss = new Colere();

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
    //console.log(keysDown);
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a boss
var reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// Throw the boss somewhere on the screen randomly
	//boss.x = 32 + (Math.random() * (canvas.width - 64));
	//boss.y = 32 + (Math.random() * (canvas.height - 64));
	if (boss.name=="Gourmandise"){
		boss = new Colere();
		hero.speed=SPEED;
	} else {
		boss = new Gourmandise();
	}
	boss.x = 100;
	boss.y = 100;
	
};

// Update game objects
var update = function (modifier) {
	let check = new Date();
	
	//set the hitbox on a center point
	//héros: largeur 1/2 et 2/3 de haut
	//boss: largeur 1/2 et 1/1 de haut
	hero.hitboxX=Math.floor(hero.x+CHARACTER_SIZE/2);
	hero.hitboxY=Math.floor(hero.y+CHARACTER_SIZE/2);
	boss.hitboxX=Math.floor(boss.x+BOSS_SIZE/2);
	boss.hitboxY=Math.floor(boss.y+BOSS_SIZE/2);

	if (hero.health>0){
		if (87 in keysDown&& hero.y>0) { // Player holding w
			hero.y -= hero.speed * modifier;
			isRunning=true;
		}
		if (83 in keysDown && hero.y+CHARACTER_SIZE<CANVAS_SIZE) { // Player holding s
			hero.y += hero.speed * modifier;
			isRunning=true;
		}
		if (65 in keysDown && hero.x>0) { // Player holding a
			hero.x -= hero.speed * modifier;
			isRunning=true;
		}
		if (68 in keysDown && hero.x+CHARACTER_SIZE<CANVAS_SIZE) { // Player holding d
			hero.x += hero.speed * modifier;
			isRunning=true;
		}
		//w to shoot fireballs
		if (13 in keysDown && ( check - hero.lastFireball) > hero.attackSpeed*1000){
			hero.fireballs.push(new Fireball(hero.x,hero.y,hero.x-boss.x<0));
			hero.lastFireball=check;
			isSlashing=true;
		}
	}
	
	if(boss.isCasting){
		if((check - boss.lastCast)>1000){
			console.log(boss.currentSpell);
			boss.lastCast=Date.now();
			boss.isCasting = false;
			boss.spell();
			throwSpell=true;
		}
	} else { 
		if((check - boss.lastCast)>4000){
			boss.isCasting = true;
			boss.lastCast = Date.now();
			boss.currentSpell =  Math.floor(Math.random()*3);
			boss.targetX=hero.x;
			boss.targetY=hero.y;
		}
	}
	//console.log(boss.isCasting);
	if(!boss.isCasting){
		if (hero.hitboxX>boss.hitboxX){
			boss.x += SPEED/5*modifier;
		}
		if (hero.hitboxX<boss.hitboxX){
			boss.x -= SPEED/5*modifier;
		}
		if (hero.hitboxY>boss.hitboxY){
			boss.y += SPEED/5*modifier;
		}
		if (hero.hitboxY<boss.hitboxY){
			boss.y -= SPEED/5*modifier;
		}
	}
	//console.log(keysDown)

	// Are they touching?
	if (boss.hp<=0) {
		reset();
	}
	if (hero.hitboxX <= (boss.hitboxX + BOSS_SIZE/4)&& hero.hitboxY <= (boss.hitboxY + BOSS_SIZE/2) &&
		boss.hitboxX <= (hero.hitboxX + BOSS_SIZE/4)&& boss.hitboxY <= (hero.hitboxY + BOSS_SIZE/2) && 
		hero.health>0) {
			hero.health-=boss.damage/10;
			damageSound.play();
			
		}
	
	//fireball movement
	for(let i=0; i<hero.fireballs.length; i++){

		let rS = hero.fireballs[i].m; //the character is shooting right or left
		hero.fireballs[i].x+= rS ? 5 : -5;
		let fireballX = hero.fireballs[i].x+PROJECTILES_SIZE/2;
		let fireballY = hero.fireballs[i].y+PROJECTILES_SIZE/2;
		
		if (fireballX>canvas.width || fireballX<0){
			hero.fireballs.splice(i,1);
		}
		
		if (fireballX <= (boss.hitboxX + BOSS_SIZE/4) && fireballY <= (boss.hitboxY + BOSS_SIZE/2)
			&& boss.hitboxX <= (fireballX + BOSS_SIZE/4)&& boss.hitboxY <= (fireballY + BOSS_SIZE/2)
			&&boss.hp>0){
				boss.hp-=hero.fireballDamage;
				hero.fireballs.splice(i,1);
		}
	}

	

	if (boss.laserX>0){		
		boss.laserX+= /*(boss.laserS ? */1/*:-1)*/*SPEED*modifier*4;
		if (boss.laserY <= (hero.hitboxY+CHARACTER_SIZE/3) && hero.hitboxY <= (boss.laserY+CHARACTER_SIZE/3) && hero.hitboxX>boss.laserX){
			hero.health-=boss.damage/5;
			damageSound.play();
		}
		if (boss.laserX>CANVAS_SIZE){
			boss.laserX=-1;
			boss.laserY=-1;
		}
		
	}

	if(boss.name=="Gourmandise"){
		for(let i = 0; i < boss.pins.length;i++){
			boss.pins[i].x+=SPEED*modifier*(boss.pins[i].sens?1:-1)*boss.pins[i].speed;
			if (boss.pins[i].x <= (hero.hitboxX+CHARACTER_SIZE/4) && hero.hitboxX <= (boss.pins[i].x+CHARACTER_SIZE/4) && hero.health>0
				&& hero.hitboxY <= (boss.pins[i].y+CANVAS_SIZE/3) && boss.pins[i].y <= hero.hitboxY){
					damageSound.play();
					hero.health-=boss.damage;
				}

		}

		for(let i = 0; i <boss.projectiles.length;i++){
			boss.projectiles[i].x+=boss.projectiles[i].varX*SPEED*modifier*3;
			boss.projectiles[i].y+=boss.projectiles[i].varY*SPEED*modifier*3;
			let pX = boss.projectiles[i].x;
			let pY = boss.projectiles[i].y;
			if (pX> canvas.width || pX<0-PROJECTILES_SIZE || pY> canvas.width || pY<0-PROJECTILES_SIZE ){
				boss.projectiles.splice(i,1);
				
			}

			if (pX <= (hero.hitboxX+CHARACTER_SIZE/4) && pY <= (hero.hitboxY+CHARACTER_SIZE/3) &&
				hero.hitboxX <= (pX+CHARACTER_SIZE/4) && hero.hitboxY <= (pY+CHARACTER_SIZE/3)){
					damageSound.play();
					hero.health-=boss.damage*2;
					boss.projectiles.splice(i,1);
				}
		}

		for(let i = 0; i<boss.muffins.length;i++){
			if(boss.muffins[i].hitboxX<=hero.hitboxX+CHARACTER_SIZE/3 && boss.muffins[i].hitboxY<=hero.hitboxY+CHARACTER_SIZE/2 &&
				hero.hitboxX<=boss.muffins[i].hitboxX+CHARACTER_SIZE/3 && hero.hitboxY<=boss.muffins[i].hitboxY+CHARACTER_SIZE/2){
					boss.muffins.splice(i,1);
					if ((hero.health+8)<CHARACTER_HP){
						hero.health+=8;
					} else {
						hero.health=CHARACTER_HP;
					}
					eatSound.play();
					hero.speed*=0.9;
			}
		}

		for(let i = 0; i<boss.ingredients.length;i++){
			
		}

	}
	else{
		for(let i = 0; i<boss.projectiles.length; i++){
			console.log("salut");
			boss.projectiles[i].x+=boss.projectiles[i].variationX[boss.projectiles[i].indice]*SPEED*modifier*PROJECTILES_SPEED;
			boss.projectiles[i].y+=boss.projectiles[i].variationY[boss.projectiles[i].indice]*SPEED*modifier*PROJECTILES_SPEED;
			let projX = boss.projectiles[i].x+PROJECTILES_SIZE/2;
			let projY = boss.projectiles[i].y+PROJECTILES_SIZE/2;
			if (projX>canvas.width || projX<0 ||projY>canvas.width || projY<0 ){
				boss.projectiles.splice(i,1);
			}
			if (projX <= (hero.hitboxX + CHARACTER_SIZE/4)&& projY <= (hero.hitboxY + CHARACTER_SIZE/3)
				&& hero.hitboxX <= (projX + CHARACTER_SIZE/4)&& hero.hitboxY <= (projY + CHARACTER_SIZE/3)
				&& hero.health>0 && !boss.projectiles[i].hasTouched){
					damageSound.play();
					hero.health-=boss.damage;
					boss.projectiles[i].hasTouched=true;
			}
	
		}
	}
	if (hero.health<0){
		hero.health=0;
	}
	
};


// Draw everything
var render = function () {
	ctx.drawImage(bgImage, 0, 0,CANVAS_SIZE,CANVAS_SIZE);
	let check = Date.now();

	if(boss.name=="Gourmandise"){
		for(let i = 0; i < boss.muffins.length; i++){
			ctx.drawImage(muffinImage, boss.muffins[i].x, boss.muffins[i].y,PROJECTILES_SIZE*0.66, PROJECTILES_SIZE*0.66);
		}
	}
	if (hero.health>0){
		if(isRunning && isSlashing){
			ctx.drawImage(heroRS[heroRSIndice], hero.x,hero.y,CHARACTER_SIZE,CHARACTER_SIZE);
			if ((check-hero.lastAnimation)>50){
				heroRSIndice++;
				hero.lastAnimation = Date.now();
				if (heroRSIndice>=heroRS.length){
					heroRSIndice=0;
					isRunning=false;
					isSlashing=false;
				}
			}
		}
		else{
			if (isRunning){
				ctx.drawImage(heroRunning[heroRunningIndice], hero.x,hero.y,CHARACTER_SIZE,CHARACTER_SIZE);
				if ((check-hero.lastAnimation)>50){
					heroRunningIndice++;
					hero.lastAnimation = Date.now();
					if (heroRunningIndice>=heroRunning.length){
						heroRunningIndice=0;
						isRunning=false;
					}
				}
			}else{
				if (isSlashing){
					ctx.drawImage(heroSlashing[heroSlashingIndice], hero.x,hero.y,CHARACTER_SIZE,CHARACTER_SIZE);
					if ((check-hero.lastAnimation)>50){
						heroSlashingIndice++;
						hero.lastAnimation = Date.now();
						if (heroSlashingIndice>=heroRunning.length){
							heroSlashingIndice=0;
							isSlashing=false;
						}
					}
				}else{
					ctx.drawImage(heroIdle[heroIdleIndice], hero.x,hero.y,CHARACTER_SIZE,CHARACTER_SIZE);
					if ((check-hero.lastAnimation)>50){
						heroIdleIndice++;
						hero.lastAnimation = Date.now();
						if (heroIdleIndice>=heroIdle.length){
							heroIdleIndice=0;
						}
					}
				}
			
			}
		}
		
	}else{
		ctx.drawImage(heroDying[heroDyingIndice], hero.x,hero.y,CHARACTER_SIZE,CHARACTER_SIZE);
		if (heroDyingIndice<14 && (check-hero.lastAnimation)>33){
			heroDyingIndice++;
			hero.lastAnimation = Date.now();
		}
	}
	ctx.drawImage(boss.bossImage, boss.x, boss.y,BOSS_SIZE,BOSS_SIZE);
	for(let i=0; i<hero.fireballs.length; i++){
		ctx.drawImage(hero.fireballs[i].m ? shootImage : shootLImage, hero.fireballs[i].x, hero.fireballs[i].y, PROJECTILES_SIZE, PROJECTILES_SIZE);
	}

	//loading
	if(boss.spell()=="laser" || boss.spell()=="projectiles"){
		if((check-boss.lastCast)<266){
			ctx.drawImage(prelaser0,boss.x+(BOSS_SIZE/2)-25,boss.y+(BOSS_SIZE/2),50,50);
		}else{
			if ((check-boss.lastCast)<533){
				ctx.drawImage(prelaser1,boss.x+(BOSS_SIZE/2)-25,boss.y+(BOSS_SIZE/2),50,50);
			}else{
				ctx.drawImage(prelaser2,boss.x+(BOSS_SIZE/2)-25,boss.y+(BOSS_SIZE/2),50,50);
			}
		}
	}
	
	if(boss.spell()=="pins"){
		let redSize=CANVAS_SIZE/3;
		if (boss.firstRandom==-1){
			boss.firstRandom= Math.floor(Math.random()*3)
			boss.secondRandom=boss.firstRandom;
			while(boss.secondRandom==boss.firstRandom){
				boss.secondRandom=Math.floor(Math.random()*3);
			}
		}
		ctx.drawImage(redZoneImage,0,redSize*boss.firstRandom,CANVAS_SIZE,redSize);
		ctx.drawImage(redZoneImage,0,redSize*boss.secondRandom,CANVAS_SIZE,redSize);
	}

	if(throwSpell){
		if(boss.spell()=="rush"){
			let xRush = (Math.abs(boss.targetX)-Math.abs(boss.x))/100;
			let yRush = (Math.abs(boss.targetY)-Math.abs(boss.y))/100;
			for(let i=1; i<101; i++){
				//boss.x+= boss.x<boss.targetX ? xRush : -xRush;
				//boss.y+= boss.y<boss.targetY ? yRush : -yRush;
				boss.x += xRush;
				boss.y += yRush;
				ctx.drawImage(boss.bossImage, boss.x, boss.y,BOSS_SIZE,BOSS_SIZE);
			}
			
		}
		if(boss.spell()=="laser"){
				boss.laserX=boss.x+(BOSS_SIZE/2);
				boss.laserY=boss.y+(BOSS_SIZE/2);
				boss.laserS= boss.x<hero.x ? false : true;
		}
		if(boss.spell()=="projectiles"){
			for(let i=0;i<8;i++){
				boss.projectiles.push(new Projectiles(boss.x+(BOSS_SIZE/2),boss.y+(BOSS_SIZE/2),i));
			}
		}
		if(boss.spell()=="pins"){
			boss.pins.push(new RollingPin(boss.firstRandom*CANVAS_SIZE/3,CANVAS_SIZE,(Math.random()>0.5)));
			boss.pins.push(new RollingPin(boss.secondRandom*CANVAS_SIZE/3,CANVAS_SIZE,(Math.random()>0.5)));
			boss.firstRandom=-1;
			boss.secondRandom=-1;	
		}
		if(boss.spell()=="food"){
			for(let i=0;i<8;i++){
				boss.projectiles.push(new Projectiles(boss.x+(BOSS_SIZE/2),boss.y+(BOSS_SIZE/2),i));
			}
		}
		if(boss.spell()=="muffin"){
			boss.projectiles.push(new Projectiles(boss.x+(BOSS_SIZE/2)-(PROJECTILES_SIZE/2),boss.y+(BOSS_SIZE/2)-(PROJECTILES_SIZE/2)),-1);
			boss.muffins.push(new Muffin);
		}
		
		throwSpell=false;
		boss.currentSpell=-1;
		}
	
	if (boss.laserX>0){
		ctx.drawImage(laser,boss.laserX,boss.laserY,990, 30);
	}
	if(boss.name=="Gourmandise"){
		for(let i = 0; i < boss.pins.length;i++){
			ctx.drawImage(pinsImage, boss.pins[i].x, boss.pins[i].y,40, CANVAS_SIZE/3);
		}
		
		for(let i = 0; i < boss.projectiles.length;i++){
			ctx.drawImage(cookieImage, boss.projectiles[i].x, boss.projectiles[i].y,PROJECTILES_SIZE, PROJECTILES_SIZE);
		}
		
		
	}
	else{
		for(let i = 0; i < boss.projectiles.length;i++){
			ctx.drawImage(projectilesImage, boss.projectiles[i].x, boss.projectiles[i].y,PROJECTILES_SIZE/3, PROJECTILES_SIZE/3);
		}
	}
	
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Health: " + hero.health + " HP \t BOSS: " + boss.hp + " HP", 32, 32);

	
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
    //console.log(delta);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();
