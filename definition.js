// IR Receiver
Blockly.Blocks["homebit3_ir_recv"] = {
  init: function () {
    this.jsonInit({
      colour: "#CC6600",
      tooltip: "",
      message0: "cảm biến IR %1 đọc được nút %2 trên remote",
      args0: [
        {
          "type": "field_dropdown",
          "name": "pin",
          "options": [
            [
              "P2",
              "pin2"
            ],
            [
              "P0",
              "pin0"
            ],
            [
              "P1",
              "pin1"
            ],
            [
              "P3",
              "pin3"
            ],
            [
              "P4",
              "pin4"
            ],
            [
              "P5",
              "pin5"
            ],
            [
              "P6",
              "pin6"
            ],
            [
              "P7",
              "pin7"
            ],
            [
              "P8",
              "pin8"
            ],
            [
              "P9",
              "pin9"
            ],
            [
              "P10",
              "pin10"
            ],
            [
              "P11",
              "pin11"
            ],
            [
              "P12",
              "pin12"
            ],
            [
              "P13",
              "pin13"
            ],
            [
              "P14",
              "pin14"
            ],
            [
              "P15",
              "pin15"
            ],
            [
              "P16",
              "pin16"
            ],
            [
              "P19",
              "pin19"
            ],
            [
              "P20",
              "pin20"
            ]
          ]
        },
        {
          type: "field_dropdown",
          name: "remote",
          options: [
            ["A", "A"],
            ["B", "B"],
            ["C", "C"],
            ["D", "D"],
            ["E", "E"],
            ["F", "F"],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/forward.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "UP"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/backward.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "DOWN"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/turn_left.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "LEFT"
            ],
            [
              {
                "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/turn_right.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "RIGHT"
            ],
            ["Setup", "SETUP"],
            ["0", "0"],
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
          ],
        },
      ],
      output: "Boolean",
      helpUrl: "",
    });
  },
};

Blockly.Python["homebit3_ir_recv"] = function (block) {
  var remote = block.getFieldValue("remote");
  var pin = block.getFieldValue("pin");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_ir_receiver'] = 'from homebit3_ir_receiver import *;';
  Blockly.Python.definitions_['import_ir_receiver_init'] = 'ir_rx = IR_RX(Pin(' + pin + '.pin, Pin.IN)); ir_rx.start();';
  var code = 'ir_rx.get_code() == IR_REMOTE_' + remote;
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks["homebit3_ir_clear"] = {
  init: function () {
    this.jsonInit({
      colour: "#CC6600",
      tooltip: "",
      message0: "xóa tín hiệu remote đã thu được",
      args0: [
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
};

Blockly.Python["homebit3_ir_clear"] = function (block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_ir_receiver'] = 'from homebit3_ir_receiver import *; ir_rx.start();';
  var code = 'ir_rx.clear_code()\n';
  return code;
};

// Cảm biến lửa
Blockly.Blocks['homebit3_detect_fire'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "type": "homebit3_detect_fire",
        "message0": "cảm biến chân %1 phát hiện có lửa",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "P2",
                "pin2"
              ],
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          }
        ],
        output: "Boolean",
        "colour": "#CC6600",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['homebit3_detect_fire'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = '' + dropdown_name + '.read_digital()==0';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["homebit3_dht_measure"] = {
  init: function() {
    this.jsonInit({
      message0: Blockly.Msg.BLOCK_DHT_MEANSURE_MESSAGE0,
      args0: [
      ],
      previousStatement: null,
      nextStatement: null,
      colour: "#CC6600",
      tooltip: Blockly.Msg.BLOCK_DHT_MEANSURE_TOOLTIP,
      helpUrl: Blockly.Msg.BLOCK_DHT_MEANSURE_HELPURL
    });
  }
};

Blockly.Python["homebit3_dht_measure"] = function(block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin, SoftI2C';
  Blockly.Python.definitions_["import_dht20"] = "from homebit3_dht20 import DHT20";
  Blockly.Python.definitions_["import_create_dht20"] = "dht20 = DHT20(SoftI2C(scl=Pin(22), sda=Pin(21)))";
  var code = "dht20.read_dht20()\n";
  return code;
};


Blockly.Blocks["homebit3_dht_read"] = {
  init: function() {
    this.jsonInit({
      message0: Blockly.Msg.BLOCK_DHT_READ_MESSAGE0,
      args0: [
        {
          type: "field_dropdown",
          name: "DATA",
          options: [
            [Blockly.Msg.BLOCK_DHT_READ_MESSAGE1, "TEMP"],
            [Blockly.Msg.BLOCK_DHT_READ_MESSAGE2, "HUMID"]
          ]
        }
      ],
      output: null,
      colour: "#CC6600",
      tooltip: Blockly.Msg.BLOCK_DHT_READ_TOOLTIP,
      helpUrl: Blockly.Msg.BLOCK_DHT_READ_HELPURL
    });
  }
};

Blockly.Python["homebit3_dht_read"] = function(block) {
  var dropdown_data = block.getFieldValue("DATA");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin, SoftI2C';
  Blockly.Python.definitions_["import_dht20"] = "from homebit3_dht20 import DHT20";
  Blockly.Python.definitions_["import_create_dht20"] = "dht20 = DHT20(SoftI2C(scl=Pin(22), sda=Pin(21)))";
  var code = "";
  if (dropdown_data == "TEMP")
    code = "dht20.dht20_temperature()";
  else 
    code = "dht20.dht20_humidity()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["homebit3_lcd1602_backlight"] = {
  init: function () {
    this.jsonInit({
      colour: "#CC6600",
      tooltip: "",
      message0: "%1 đèn màn hình LCD1602",
      args0: [
        {
          type: "field_dropdown",
          name: "action",
          options: [
            ["bật", "on"],
            ["tắt", "off"],
          ],
        },
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
};

Blockly.Python['homebit3_lcd1602_backlight'] = function(block) {
  var action = block.getFieldValue("action");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_lcd1602'] = 'from homebit3_lcd1602 import LCD1602';
  Blockly.Python.definitions_['import_lcd1602_init'] = 'lcd1602 = LCD1602()';
  var code = 'lcd1602.backlight_' + action + '()\n';
  return code;
};

Blockly.Blocks["homebit3_lcd1602_display"] = {
  init: function () {
    this.jsonInit({
      colour: "#CC6600",
      tooltip: "",
      message0: "hiện lên LCD1602 %1 tại x %2 y %3 %4",
      args0: [
        {
          type: "input_value",
          name: "string"
        },
        {
          type: "input_value",
          name: "X",
          check: "Number",
          min: 0,
          max: 16
        },
        {
          type: "input_value",
          name: "Y",
          check: "Number",
          min: 0,
          max: 2
        },
        {
          type: "input_dummy"
        },
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
};

Blockly.Python["homebit3_lcd1602_display"] = function (block) {
  Blockly.Python.definitions_['import_lcd1602'] = 'from homebit3_lcd1602 import LCD1602';
  Blockly.Python.definitions_['import_lcd1602_init'] = 'lcd1602 = LCD1602()';
  var string = Blockly.Python.valueToCode(block, 'string', Blockly.Python.ORDER_ATOMIC);
  var x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);  // TODO: Assemble Python into code variable.
  var code = "lcd1602.move_to(" + x + ", "+ y +")\n" + "lcd1602.putstr("+ string +")\n";
  return code;
};

Blockly.Blocks["homebit3_lcd1602_clear"] = {
  init: function () {
    this.jsonInit({
      colour: "#CC6600",
      tooltip: "",
      message0: "xóa màn hình LCD1602",
      args0: [
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "Xóa trắng màn hình LCD1602",
    });
  },
};

Blockly.Python["homebit3_lcd1602_clear"] = function (block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_lcd1602'] = 'from homebit3_lcd1602 import LCD1602';
  Blockly.Python.definitions_['import_lcd1602_init'] = 'lcd1602 = LCD1602()';
  var code = "lcd1602.clear()\n";
  return code;
};

// Mini fan
Blockly.Blocks['homebit3_minifan'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "type": "homebit3_minifan",
        "message0": "bật quạt chân %1 với tốc độ (0-100) %2 %%",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "P3",
                "pin3"
              ],
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "percent",
            "check": "Number"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#CC6600",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['homebit3_minifan'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  var value_percent = Blockly.Python.valueToCode(block, 'percent', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '' + dropdown_name + '.write_analog(round(translate('+value_percent+', 0, 100, 0, 1023)))\n';
  return code;
};

Blockly.Blocks["homebit3_alarm"] = {
  init: function () {
    this.jsonInit({
      colour: "#CC6600",
      message0: "phát âm thanh cảnh báo",
      args0: [
      ],
      "previousStatement": null,
      "nextStatement": null,
      tooltip: "Phát âm thanh cảnh báo",
      helpUrl: ""
    });
  },
};

Blockly.Python['homebit3_alarm'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_music'] = 'import music';
  // TODO: Assemble Python into code variable.
  var cbFunctionName = Blockly.Python.provideFunction_(
    'sound_alarm',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
      "  for count in range(5):",
      "    music.play(['A5:1'], wait=True)",
      "    music.play(['E5:1'], wait=True)",
    ]);

    var code = '' + cbFunctionName + '()\n';
    return code;
};

Blockly.Blocks["homebit3_led_tiny_set_all"] = {
  init: function () {
    this.jsonInit({
      inputsInline: true,
      colour: "#CC6600",
      nextStatement: null,
      tooltip: "",
      message0: "LED RGB chân %1 đổi màu led %2 thành %3 %4",
      previousStatement: null,
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          "options": [
            [
              "P14",
              "pin14"
            ],
            [
              "P0",
              "pin0"
            ],
            [
              "P1",
              "pin1"
            ],
            [
              "P2",
              "pin2"
            ],
            [
              "P3",
              "pin3"
            ],
            [
              "P4",
              "pin4"
            ],
            [
              "P5",
              "pin5"
            ],
            [
              "P6",
              "pin6"
            ],
            [
              "P7",
              "pin7"
            ],
            [
              "P8",
              "pin8"
            ],
            [
              "P9",
              "pin9"
            ],
            [
              "P10",
              "pin10"
            ],
            [
              "P11",
              "pin11"
            ],
            [
              "P12",
              "pin12"
            ],
            [
              "P13",
              "pin13"
            ],
            [
              "P15",
              "pin15"
            ],
            [
              "P16",
              "pin16"
            ],
            [
              "P19",
              "pin19"
            ],
            [
              "P20",
              "pin20"
            ]
          ],
        },
        {
          type: "field_dropdown",
          name: "option",
          options: [
            ["tất cả", "0"],
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
          ],
        },
        { type: "input_value", name: "COLOR" },
        {type: "input_dummy"},
      ],
      helpUrl: ""
    });
  },
};

Blockly.Python['homebit3_led_tiny_set_all'] = function(block) {
  var port = block.getFieldValue('port');
  var option = block.getFieldValue('option');
  var color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_led_tiny'] = 'from homebit3_rgbled import RGBLed';
  Blockly.Python.definitions_['import_led_tiny_init'] = 'tiny_rgb = RGBLed('+ port +'.pin, 4)';
  // TODO: Assemble Python into code variable.
  var code = "tiny_rgb.show("+ option +", hex_to_rgb("+ color +"))\n";
  return code;
};

// Cảm biến chuyển động PIR
Blockly.Blocks['homebit3_detect_motion'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "type": "homebit3_detect_motion",
        "message0": "cảm biến chân %1 phát hiện có người",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "P16",
                "pin16"
              ],
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          },
        ],
        output: "Boolean",
        "colour": "#CC6600",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['homebit3_detect_motion'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = '' + dropdown_name + '.read_digital()==1';
  return [code, Blockly.Python.ORDER_NONE];
};

// Cảm biến ánh sáng
Blockly.Blocks['homebit3_light_sensor'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "homebit3_light_sensor",
        "message0": "đọc cảm biến ánh sáng (%%) chân %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ]
            ]
          }
        ],
        "output": null,
        "colour": "#cc6600",
        "tooltip": "Đọc giá trị của cảm biến ánh sáng",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['homebit3_light_sensor'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'round(translate((' + dropdown_name + '.read_analog()), 0, 4095, 0, 100))';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
