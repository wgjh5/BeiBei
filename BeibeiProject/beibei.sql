/*
Navicat MySQL Data Transfer

Source Server         : wgj
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : beibei

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-13 16:17:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `id` varchar(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `imgsrc` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `jieshao` varchar(255) NOT NULL,
  `curprice` varchar(255) NOT NULL,
  `oldprice` varchar(255) NOT NULL,
  `qty` varchar(255) NOT NULL,
  `xiaoji` varchar(255) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES ('003', '111', '../images/85684340781098_800x800.jpg', '秋冬儿童袜子男童女童宝宝袜', '秋冬儿童袜子男童女童宝宝袜', '15', ' ¥68', '2', '15');
INSERT INTO `car` VALUES ('002', '77', '../images/40992601866092_800x800.jpg!320x320.jpg', '1到8岁男童韩版洋气牛仔外套', '1到8岁男童韩版洋气牛仔外套', '39', '¥108.9', '1', '39');
INSERT INTO `car` VALUES ('002', '11', '../images/40992601866092_800x800.jpg!320x320.jpg', '1到8岁男童韩版洋气牛仔外套', '1到8岁男童韩版洋气牛仔外套', '39', '¥108.9', '1', '39');
INSERT INTO `car` VALUES ('002', '111', '../images/40992601866092_800x800.jpg!320x320.jpg', '1到8岁男童韩版洋气牛仔外套', '1到8岁男童韩版洋气牛仔外套', '39', '¥108.9', '6', '39');
INSERT INTO `car` VALUES ('012', '111', '../images/wazi.jpg', '时尚潮袜5双装新款纯棉儿童袜子', '时尚潮袜5双装新款纯棉儿童袜子', '17', '¥89', '8', '17');
INSERT INTO `car` VALUES ('012', '77', '../images/wazi.jpg', '时尚潮袜5双装新款纯棉儿童袜子', '时尚潮袜5双装新款纯棉儿童袜子', '17', '¥89', '1', '17');
INSERT INTO `car` VALUES ('006', '77', '../images/69711149303699_800x800.jpg', ' 男童女童休闲运动服条纹套装', ' 男童女童休闲运动服条纹套装', '55', '¥228', '3', '55');
INSERT INTO `car` VALUES ('011', '77', '../images/xiaoxiong.jpg', '欢喜小熊婴幼儿纯棉立领套装', '欢喜小熊婴幼儿纯棉立领套装', '19', '¥60', '1', '19');
INSERT INTO `car` VALUES ('016', '77', '../images/37238897585171_800x800.jpg', '【已抢7.7万件，单包仅需0.99元】植护婴儿原木三色抽纸30包整箱装', '【已抢7.7万件，单包仅需0.99元】植护婴儿原木三色抽纸30包整箱装', '29', '¥80', '1', '29');

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `imgsrc` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `curprice` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `pricelittle` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `oldprice` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `discountdesc` varchar(255) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('031', '../img/00811437173248_800x800.jpg!250x250.jpg', '国庆特惠 可味网红坚果蜜饯零食大礼包', '28.9', '0.9', '￥98', '4.9');
INSERT INTO `list` VALUES ('032', '../img/02281413839486_800x800.jpg!250x250.jpg', '1到8岁男童韩版洋气牛仔外套', '39.9', '0.9', '￥89', '3.7');
INSERT INTO `list` VALUES ('033', '../img/02281413839486_800x800.jpg!250x250.jpg', '秋冬儿童袜子男童女童宝宝袜', '15.8', '0.8', ' ￥84', '2.4');
INSERT INTO `list` VALUES ('034', '../img/05784325658686_800x800.jpg!250x250.jpg', '夹克熊5双装0至12岁秋款童袜', '13.9', '0.9', '￥98', '1.8');
INSERT INTO `list` VALUES ('035', '../img/06631924550735_800x800.jpg!250x250.jpg', ' 女童秋装套装2018新款两件套', '69', '0', '￥99', '3.5');
INSERT INTO `list` VALUES ('036', '../img/06973459901727_800x800.jpg!250x250.jpg', ' 男童女童休闲运动服条纹套装', '55.9', '0.9', '￥28', '2.5');
INSERT INTO `list` VALUES ('037', '../img/12049733407978_800x800.jpg!250x250.jpg', ' 贝壳元素男童长袖T恤打底衫', '25.9', '0.9', ' ￥98', '3.8');
INSERT INTO `list` VALUES ('038', '../img/12060829628323_800x800.jpg!250x250.jpg', '到手价59元！巴拉巴拉男幼童长裤', '89', '0', '￥19', '7.5');
INSERT INTO `list` VALUES ('039', '../img/13122520672200_800x800.jpg!250x250.jpg', '男童纯棉韩版休闲运动帅气套装', '49.9', '0.9', '￥99', '2.6');
INSERT INTO `list` VALUES ('040', '../img/13992175138005_800x800.jpg!250x250.jpg', '秋冬纯棉男女宝宝秋衣裤内衣套装', '19', '0', '￥96', '2.8');
INSERT INTO `list` VALUES ('041', '../img/14218931101011_800x800.jpg!250x250.jpg', '欢喜小熊婴幼儿纯棉立领套装', '19.9', '0.9', '￥55', '3.4');
INSERT INTO `list` VALUES ('042', '../img/17409326901857_800x800.jpg!250x250.jpg', '时尚潮袜5双装新款纯棉儿童袜子', '17.9', '0.9', '￥79', '2.1');
INSERT INTO `list` VALUES ('043', '../img/20334850954676_800x800.jpg!250x250.jpg', '男孩纯棉可爱时尚两件套', '58.9', '0.9', '￥99', '3.5');
INSERT INTO `list` VALUES ('044', '../img/23486644850353_800x800.jpg!250x250.jpg', '纯棉三角内裤不夹屁屁二童', '28.8', '0.8', '￥88', '3.3');
INSERT INTO `list` VALUES ('045', '../img/24699768678520_800x800.jpg!250x250.jpg', '男童牛仔裤2018新款韩版', '45', '0', '￥35', '3.4');
INSERT INTO `list` VALUES ('046', '../img/25982264023489_800x800.jpg!250x250.jpg', '【已抢7.7万件，单包仅需0.99元】植护婴儿原木三色抽纸30包整箱装', '29.9', '0.9', '￥89', '3.8');
INSERT INTO `list` VALUES ('047', '../img/28708583575183_800x800.jpg!250x250.jpg', '棉质套装儿童秋款长袖长裤套装', '29', '0.9', '￥59', '1.9');
INSERT INTO `list` VALUES ('048', '../img/30051979402074_800x800.jpg!250x250.jpg', '淘喜 女童纯棉百搭花边圆领T恤', '22.9', '0.9', '￥18', '2.2');
INSERT INTO `list` VALUES ('049', '../img/30707278786731_800x800.jpg!250x250.jpg', '孩尔祎 男女儿童纯棉内衣套装', '32', '0.9', '￥94', '3.4');
INSERT INTO `list` VALUES ('050', '../img/33474984460857_800x800.jpg!250x250.jpg', '会理突尼斯软籽石榴6粒装', '35.9', '0.8', '￥45', '7.2');
INSERT INTO `list` VALUES ('051', '../img/33858539819486_800x800.jpg!250x250.jpg', '儿童针织背心马甲男女宝宝坎肩秋', '29.8', '0', '￥98', '3.3');
INSERT INTO `list` VALUES ('052', '../img/37845319339486_800x800.jpg!250x250.jpg', '福建平和琯溪蜜柚2个装', '19', '0.9', '￥88', '4.5');
INSERT INTO `list` VALUES ('053', '../img/38642903461823_800x800.jpg!250x250.jpg', '阿道夫 去屑控油洗发水420gx2瓶', '25.5', '0', '￥58', '5.6');
INSERT INTO `list` VALUES ('054', '../img/43667943285183_800x800.jpg!250x250.jpg', ' A类纯棉男女童内衣套装', '29.9', '0.9', '￥88', '3.1');
INSERT INTO `list` VALUES ('055', '../img/44174300180490_800x800.jpg!250x250.jpg', '秋季新款女童卫衣打底衫', '29.9', '0.9', '￥98', '1.6');
INSERT INTO `list` VALUES ('056', '../img/44962274580800_800x800.jpg!250x250.jpg', '棉质套装女童秋款长袖长裤套装', '39.9', '0.9', '￥59', '2.6');
INSERT INTO `list` VALUES ('057', '../img/48302307237978_800x800.jpg!250x250.jpg', '淘喜 男女童纯棉小鱼刺绣T恤', '19.9', '0.9', '￥56', '1.3');
INSERT INTO `list` VALUES ('058', '../img/48968020188686_800x800.jpg!250x250.jpg', '【四件套+抱枕套一对】俞兆林超值加厚磨毛床单六件套', '59.9', '0', '￥99', '3.4');
INSERT INTO `list` VALUES ('059', '../img/49515360005476_800x800.jpg!250x250.jpg', '女童纯棉洋气可爱春秋两件套', '59.8', '0.8', '￥89', '5.5');
INSERT INTO `list` VALUES ('060', '../img/50739955693753_800x800.jpg!250x250.jpg', '1到9岁小女孩2018春秋可爱外套', '36.9', '0.9', '￥96', '4.7');
INSERT INTO `list` VALUES ('061', '../img/53661586070490_800x800.jpg!250x250.jpg', '夹克熊5双装0至13岁秋款童袜', '19.9', '0.9', '￥95', '4.9');
INSERT INTO `list` VALUES ('062', '../img/55841060846490_800x800.jpg!250x250.jpg', ' 女童秋装套装2019新款两件套', '19.8', '0.9', '￥89', '3.7');
INSERT INTO `list` VALUES ('063', '../img/56049934621727_800x800.jpg!250x250.jpg', ' 男童女童休闲运动服条纹套装', '17.8', '0.8', ' ￥88', '2.4');
INSERT INTO `list` VALUES ('064', '../img/56089451637246_800x800.jpg!250x250.jpg', ' 贝壳元素男童长袖T恤打底衫', '58.9', '0.9', '￥98', '1.8');
INSERT INTO `list` VALUES ('065', '../img/57886247415183_800x800.jpg!250x250.jpg', '到手价60元！巴拉巴拉男幼童长裤', '28', '0', '￥99', '3.5');
INSERT INTO `list` VALUES ('066', '../img/59052095407478_800x800.jpg!250x250.jpg', '男童纯棉韩版休闲运动帅气套装', '45', '0.9', '￥28', '2.5');
INSERT INTO `list` VALUES ('067', '../img/60106854715183_800x800.jpg!250x250.jpg', '秋冬纯棉男女宝宝秋衣裤内衣套装', '29.9', '0.9', ' ￥98', '3.8');
INSERT INTO `list` VALUES ('068', '../img/61221996729151_800x800.jpg!250x250.jpg', '欢喜小熊婴幼儿纯棉立领套装', '29', '0', '￥19', '7.5');
INSERT INTO `list` VALUES ('069', '../img/62950444840353_800x800.jpg!250x250.jpg', '时尚潮袜6双装新款纯棉儿童袜子', '22.9', '0.9', '￥99', '2.6');
INSERT INTO `list` VALUES ('070', '../img/63957500327682_800x800.jpg!250x250.jpg', '男孩纯棉可爱时尚两件套', '32', '0', '￥98', '2.8');
INSERT INTO `list` VALUES ('071', '../img/64423354697314_800x800.jpg!250x250.jpg', '纯棉三角内裤不夹屁屁二童', '359', '0.9', '￥86', '3.4');
INSERT INTO `list` VALUES ('072', '../img/64765742856658_800x800.jpg!250x250.jpg', '男童牛仔裤2019新款韩版', '29', '0.9', '￥98', '2.1');
INSERT INTO `list` VALUES ('073', '../img/66569443565359_800x800.jpg!250x250.jpg', '【已抢7.7万件，单包仅需0.99元】植护婴儿原木三色抽纸31包整箱装', '19', '0.9', '￥99', '3.5');
INSERT INTO `list` VALUES ('074', '../img/67925741720371_800x800.jpg!250x250.jpg', '棉质套装儿童秋款长袖长裤套装', '88', '0.8', '￥88', '3.3');
INSERT INTO `list` VALUES ('075', '../img/68010225481857_800x800.jpg!250x250.jpg', '淘喜 女童纯棉百搭花边圆领T恤', '29.9', '0', '￥35', '3.4');
INSERT INTO `list` VALUES ('076', '../img/68165724718932_800x800.jpg!250x250.jpg', '孩尔祎 男女儿童纯棉内衣套装', '29', '0.9', '￥59', '3.8');
INSERT INTO `list` VALUES ('077', '../img/69711149303699_800x800.jpg!250x250.jpg', '会理突尼斯软籽石榴7粒装', '39', '0.9', '￥59', '1.9');
INSERT INTO `list` VALUES ('078', '../img/69989345993517_800x800.jpg!250x250.jpg', '儿童针织背心马甲男女宝宝坎肩秋', '19.8', '0.9', '￥18', '2.2');
INSERT INTO `list` VALUES ('079', '../img/70822745143327_800x800.jpg!250x250.jpg', '福建平和琯溪蜜柚3个装', '59', '0.9', '￥99', '3.4');
INSERT INTO `list` VALUES ('080', '../img/71975554375177_800x800.jpg!250x250.jpg', '阿道夫 去屑控油洗发水420gx3瓶', '59.8', '0.8', '￥99', '7.2');
INSERT INTO `list` VALUES ('081', '../img/73828591968698_800x800.jpg!250x250.jpg', ' A类纯棉男女童内衣套装', '36', '0', '￥98', '3.3');
INSERT INTO `list` VALUES ('082', '../img/74179875888352_800x800.jpg!250x250.jpg', '秋季新款女童卫衣打底衫', '19', '0.9', '￥58', '4.5');
INSERT INTO `list` VALUES ('083', '../img/74223982844591_800x800.jpg!250x250.jpg', '棉质套装女童秋款长袖长裤套装', '19', '0', '￥58', '5.6');
INSERT INTO `list` VALUES ('084', '../img/74859958095856_800x800.jpg!250x250.jpg', '淘喜 男女童纯棉小鱼刺绣T恤', '17', '0.9', '￥88', '3.1');
INSERT INTO `list` VALUES ('085', '../img/75300164198323_800x800.jpg!250x250.jpg', '【四件套+抱枕套一对】俞兆林超值加厚磨毛床单六件套', '58.9', '0.9', '￥98', '1.6');
INSERT INTO `list` VALUES ('086', '../img/78106445942744_800x800.jpg!250x250.jpg', '女童纯棉洋气可爱春秋两件套', '28.9', '0.9', '￥59', '2.6');
INSERT INTO `list` VALUES ('087', '../img/78938086260858_800x800.jpg!250x250.jpg', '1到9岁小女孩2019春秋可爱外套', '45.9', '0.9', '￥56', '1.3');
INSERT INTO `list` VALUES ('088', '../img/79194038767246_800x800.jpg!250x250.jpg', '夹克熊5双装0至14岁秋款童袜', '29', '0', '￥99', '3.4');
INSERT INTO `list` VALUES ('089', '../img/80593293989486_800x800.jpg!250x250.jpg', ' 女童秋装套装2020新款两件套', '29.9', '0.8', '￥87', '5.5');
INSERT INTO `list` VALUES ('090', '../img/81797627941172_800x800.jpg!250x250.jpg', ' 男童女童休闲运动服条纹套装', '22', '0.9', '￥9.8', '4.7');
INSERT INTO `list` VALUES ('091', '../img/82102687828349_600x600.jpg!250x250.jpg', ' 贝壳元素男童长袖T恤打底衫', '32.9', '0.9', '￥89', '4.9');
INSERT INTO `list` VALUES ('092', '../img/82354086297188_800x800.jpg!250x250.jpg', '到手价61元！巴拉巴拉男幼童长裤', '35', '0.9', '￥99', '3.7');
INSERT INTO `list` VALUES ('093', '../img/83378028745359_800x800.jpg!250x250.jpg', '男童纯棉韩版休闲运动帅气套装', '29.9', '0.9', '￥99', '2.4');
INSERT INTO `list` VALUES ('094', '../img/84445829966731_800x800.jpg!250x250.jpg', '秋冬纯棉男女宝宝秋衣裤内衣套装', '19', '0.8', '￥89', '1.8');
INSERT INTO `list` VALUES ('095', '../img/84506918486731_800x800.jpg!250x250.jpg', '欢喜小熊婴幼儿纯棉立领套装', '88', '0', '￥35', '3.5');
INSERT INTO `list` VALUES ('096', '../img/84590782596731_800x800.jpg!250x250.jpg', '时尚潮袜7双装新款纯棉儿童袜子', '29.9', '0.9', '￥99', '2.5');
INSERT INTO `list` VALUES ('097', '../img/85254545896490_800x800.jpg!250x250.jpg', '男孩纯棉可爱时尚两件套', '29', '0.9', '￥59', '3.8');
INSERT INTO `list` VALUES ('098', '../img/87544795191098_800x800.jpg!250x250.jpg', '纯棉三角内裤不夹屁屁二童', '39', '0.9', '￥18', '7.5');
INSERT INTO `list` VALUES ('099', '../img/87590298931601_500x500.jpg!250x250.jpg', '男童牛仔裤2020新款韩版', '19', '0.9', '￥99', '2.6');
INSERT INTO `list` VALUES ('100', '../img/88057171257682_800x800.jpg!250x250.jpg', '【已抢7.7万件，单包仅需0.99元】植护婴儿原木三色抽纸32包整箱装', '59.9', '0.8', '￥99', '2.8');
INSERT INTO `list` VALUES ('101', '../img/88184930026490_800x800.jpg!250x250.jpg', '棉质套装儿童秋款长袖长裤套装', '59', '0', '￥97', '3.4');
INSERT INTO `list` VALUES ('102', '../img/88253801449505_800x800.jpg!250x250.jpg', '淘喜 女童纯棉百搭花边圆领T恤', '39.9', '0.9', '￥58', '2.1');
INSERT INTO `list` VALUES ('103', '../img/88548736669996_800x800.jpg!250x250.jpg', '孩尔祎 男女儿童纯棉内衣套装', '19', '0', '￥58', '3.5');
INSERT INTO `list` VALUES ('104', '../img/88936726811851_800x800.jpg!250x250.jpg', '会理突尼斯软籽石榴8粒装', '19', '0.9', '￥88', '3.3');
INSERT INTO `list` VALUES ('105', '../img/92135630335183_750x750.jpg!250x250.jpg', '儿童针织背心马甲男女宝宝坎肩秋', '17.9', '0.9', '￥98', '3.4');
INSERT INTO `list` VALUES ('106', '../img/94288914530436_800x800.jpg!250x250.jpg', '福建平和琯溪蜜柚4个装', '58', '0.9', '￥59', '3.8');
INSERT INTO `list` VALUES ('107', '../img/95711699194915_800x800.jpg!250x250.jpg', '阿道夫 去屑控油洗发水420gx4瓶', '28.9', '0.9', '￥56', '1.9');
INSERT INTO `list` VALUES ('108', '../img/97483137974676_800x800.jpg!250x250.jpg', ' A类纯棉男女童内衣套装', '45', '0', '￥99', '2.2');
INSERT INTO `list` VALUES ('109', '../img/98369505738288_800x800.jpg!250x250.jpg', '秋季新款女童卫衣打底衫', '56.9', '0.8', '￥99', '3.4');
INSERT INTO `list` VALUES ('110', '../img/45729261791079_800x800.jpg!250x250.jpg', '棉质套装女童秋款长袖长裤套装', '58.9', '0.9', '￥98', '7.2');
INSERT INTO `list` VALUES ('111', '../img/66569443565359_800x800.jpg!250x250.jpg', '【已抢7.7万件，单包仅需0.99元】植护婴儿原木三色抽纸31包整箱装', '19', '0.9', '￥99', '3.5');

-- ----------------------------
-- Table structure for login2
-- ----------------------------
DROP TABLE IF EXISTS `login2`;
CREATE TABLE `login2` (
  `nickname` varchar(255) NOT NULL,
  `passwords` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of login2
-- ----------------------------
INSERT INTO `login2` VALUES ('123456', 'w123456');
INSERT INTO `login2` VALUES ('112233', 'w112233');
INSERT INTO `login2` VALUES ('15666998899', '11');
INSERT INTO `login2` VALUES ('13666995588', 'aaa');
INSERT INTO `login2` VALUES ('a1111', '11');
INSERT INTO `login2` VALUES ('77', '789');
INSERT INTO `login2` VALUES ('18988999988', 'a123456');
INSERT INTO `login2` VALUES ('99', '999');
INSERT INTO `login2` VALUES ('18955666655', '123');
INSERT INTO `login2` VALUES ('15859599898', 'a159');
INSERT INTO `login2` VALUES ('11', '11');
INSERT INTO `login2` VALUES ('15666888866', '111');
INSERT INTO `login2` VALUES ('15666555588', '111');
INSERT INTO `login2` VALUES ('15256666655', '11');
INSERT INTO `login2` VALUES ('15688999955', 'a111');
INSERT INTO `login2` VALUES ('15688999955', 'a111');
INSERT INTO `login2` VALUES ('15688999955', 'a111');
INSERT INTO `login2` VALUES ('15625252626', 'a123');

-- ----------------------------
-- Table structure for shouye
-- ----------------------------
DROP TABLE IF EXISTS `shouye`;
CREATE TABLE `shouye` (
  `id` varchar(50) NOT NULL,
  `imgsrc` varchar(255) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 NOT NULL,
  `curprice` varchar(50) NOT NULL,
  `pricelittle` varchar(255) NOT NULL,
  `oldprice` varchar(50) NOT NULL,
  `discountdesc` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of shouye
-- ----------------------------
INSERT INTO `shouye` VALUES ('001', 'images/29799447150843_720x720.png', '国庆特惠 可味网红坚果蜜饯零食大礼包', '28', '.90', '¥59.9', '4.9');
INSERT INTO `shouye` VALUES ('002', 'images/40992601866092_800x800.jpg!320x320.jpg', '1到8岁男童韩版洋气牛仔外套', '39', '.90', '¥108.9', '3.7');
INSERT INTO `shouye` VALUES ('003', 'images/85684340781098_800x800.jpg', '秋冬儿童袜子男童女童宝宝袜', '15', '.80', ' ¥68', '2.4');
INSERT INTO `shouye` VALUES ('004', 'images/88057171257682_800x800.jpg', '夹克熊5双装0至12岁秋款童袜', '13', '.90', '¥79', '1.8');
INSERT INTO `shouye` VALUES ('005', 'images/95711699194915_800x800.jpg', ' 女童秋装套装2018新款两件套', '69', '.00', '¥199', '3.5');
INSERT INTO `shouye` VALUES ('006', 'images/69711149303699_800x800.jpg', ' 男童女童休闲运动服条纹套装', '55', '.90', '¥228', '2.5');
INSERT INTO `shouye` VALUES ('007', 'images/dadishan.jpg', ' 贝壳元素男童长袖T恤打底衫', '25', '.90', ' ¥69', '3.8');
INSERT INTO `shouye` VALUES ('008', 'images/changku.jpg', '到手价59元！巴拉巴拉男幼童长裤', '89', '.00', '¥119', '7.5');
INSERT INTO `shouye` VALUES ('009', 'images/taozhuang.jpg', '男童纯棉韩版休闲运动帅气套装', '49', '.90', '¥199', '2.6');
INSERT INTO `shouye` VALUES ('010', 'images/neiyi2.jpg', '秋冬纯棉男女宝宝秋衣裤内衣套装', '19', '.00', '¥69', '2.8');
INSERT INTO `shouye` VALUES ('011', 'images/xiaoxiong.jpg', '欢喜小熊婴幼儿纯棉立领套装', '19', '.90', '¥60', '3.4');
INSERT INTO `shouye` VALUES ('012', 'images/wazi.jpg', '时尚潮袜5双装新款纯棉儿童袜子', '17', '.90', '¥89', '2.1');
INSERT INTO `shouye` VALUES ('013', 'images/82102687828349_600x600.jpg', '男孩纯棉可爱时尚两件套', '58', '.90', '¥199', '3.5');
INSERT INTO `shouye` VALUES ('014', 'images/neiku.jpg', '纯棉三角内裤不夹屁屁二童', '28', '.80', '¥88', '3.3');
INSERT INTO `shouye` VALUES ('015', 'images/nanniuzai.jpg', '男童牛仔裤2018新款韩版', '45', '.00', '¥135', '3.4');
INSERT INTO `shouye` VALUES ('016', 'images/37238897585171_800x800.jpg', '【已抢7.7万件，单包仅需0.99元】植护婴儿原木三色抽纸30包整箱装', '29', '.90', '¥80', '3.8');
INSERT INTO `shouye` VALUES ('017', 'images/64765742856658_800x800.jpg', '棉质套装儿童秋款长袖长裤套装', '29', '.90', '¥159', '1.9');
INSERT INTO `shouye` VALUES ('018', 'images/94003081010447_800x800.jpg', '淘喜 女童纯棉百搭花边圆领T恤', '22', '.90', '¥118', '2.2');
INSERT INTO `shouye` VALUES ('019', 'images/45244460228034_800x800.jpg', '孩尔祎 男女儿童纯棉内衣套装', '32', '.90', '¥99', '3.4');
INSERT INTO `shouye` VALUES ('020', 'images/beixin.jpg', '会理突尼斯软籽石榴6粒装', '35', '.80', '¥50', '7.2');
INSERT INTO `shouye` VALUES ('021', 'images/86298092006490_800x800.jpg', '儿童针织背心马甲男女宝宝坎肩秋', '29', '.00', '¥89', '3.3');
INSERT INTO `shouye` VALUES ('022', 'images/94547212594198_800x800.jpg', '福建平和琯溪蜜柚2个装', '19', '.90', '¥45', '4.5');
INSERT INTO `shouye` VALUES ('023', 'images/33827995737362_800x800.jpg', '阿道夫 去屑控油洗发水420gx2瓶', '88', '.00', '¥158', '5.6');
INSERT INTO `shouye` VALUES ('024', 'images/94662773040447_800x800.jpg', ' A类纯棉男女童内衣套装', '29', '.90', '¥98', '3.1');
INSERT INTO `shouye` VALUES ('025', 'images/nvtongdadi.jpg', '秋季新款女童卫衣打底衫', '29', '.90', '¥198', '1.6');
INSERT INTO `shouye` VALUES ('026', 'images/16463482990447_800x800.jpg!320x320.jpg', '棉质套装女童秋款长袖长裤套装', '39', '.90', '¥159', '2.6 ');
INSERT INTO `shouye` VALUES ('027', 'images/52395642066092_800x800.jpg!320x320.jpg', '淘喜 男女童纯棉小鱼刺绣T恤', '19', '.90', '¥156', '1.3 ');
INSERT INTO `shouye` VALUES ('028', 'images/16911930115311_800x800.jpg!320x320.jpg', '【四件套+抱枕套一对】俞兆林超值加厚磨毛床单六件套', '59', '.00', '¥199', '3.4');
INSERT INTO `shouye` VALUES ('029', 'images/44565731344670_800x800.jpg!320x320.jpg', '女童纯棉洋气可爱春秋两件套', '59', '.80', '¥108.9', '5.5');
INSERT INTO `shouye` VALUES ('030', 'images/85293840818009_800x800.jpg!320x320.jpg', '1到9岁小女孩2018春秋可爱外套', '36', '.90', '¥79.8', '4.7');
SET FOREIGN_KEY_CHECKS=1;
