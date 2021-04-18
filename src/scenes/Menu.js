
class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }
    preload(){
        this.load.audio('sfx_select', './assets/blipSelect.wav');
        this.load.audio('sfx_explosion', './assets/explosion.wav');
        this.load.audio('sfx_rocket', './assets/rocketShot.wav');
    }
    create(){
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
              top: 5,
              bottom: 5,
            },
            fixedWidth: 0
          }

          this.add.text(game.config.width/2 , game.config.height/2 - borderUISize - borderPadding, "ROCKET PATROL", menuConfig).setOrigin(0.5);
          this.add.text(game.config.width/2 , game.config.height/2, "Use ← → arrows to move and (F) to fire", menuConfig).setOrigin(0.5);
          this.add.text(game.config.width/2 , game.config.height/2 + borderUISize + borderPadding, "Press ← → to begin", menuConfig).setOrigin(0.5);
          keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
          keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);



    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {


          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {


          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
      }


}