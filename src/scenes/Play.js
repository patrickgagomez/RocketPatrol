class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images/tile sprites
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield_back', './assets/starfield_back.png');
        this.load.image('starfield_front', './assets/starfield_front.png');
      }

    create() {
        // place tile sprite
        this.starfield_back = this.add.tileSprite(0, 0, 640, 480, 'starfield_back').setOrigin(0, 0);
        this.starfield_front = this.add.tileSprite(0, 0, 640, 480, 'starfield_front').setOrigin(0, 0);

        // green UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);
        // white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
    }

    update() {
        this.starfield_back.tilePositionX -= 1.8;
        this.starfield_front.tilePositionX -= 0.5;
      }
}