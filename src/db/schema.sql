-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'questions'
-- 
-- ---

DROP TABLE IF EXISTS `questions`;
		
CREATE TABLE `questions` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `body` MEDIUMTEXT NOT NULL,
  `date` DATETIME NOT NULL,
  `name` VARCHAR(32) NOT NULL,
  `helpfulness` INTEGER NOT NULL DEFAULT 0,
  `reported` INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'answers'
-- 
-- ---

DROP TABLE IF EXISTS `answers`;
		
CREATE TABLE `answers` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `body` MEDIUMTEXT NOT NULL,
  `date` DATETIME NOT NULL,
  `name` VARCHAR(32) NULL,
  `helpfulness` INTEGER NOT NULL DEFAULT 0,
  `reported` INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'questions-answers'
-- 
-- ---

DROP TABLE IF EXISTS `questions-answers`;
		
CREATE TABLE `questions-answers` (
  `question_id` INTEGER NOT NULL,
  `answer_id` INTEGER NOT NULL,
  PRIMARY KEY (`question_id`)
);

-- ---
-- Table 'photos'
-- 
-- ---

DROP TABLE IF EXISTS `photos`;
		
CREATE TABLE `photos` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `url` VARCHAR NOT NULL,
  `answer_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `questions-answers` ADD FOREIGN KEY (question_id) REFERENCES `questions` (`id`);
ALTER TABLE `questions-answers` ADD FOREIGN KEY (answer_id) REFERENCES `answers` (`id`);
ALTER TABLE `photos` ADD FOREIGN KEY (answer_id) REFERENCES `answers` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `questions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `answers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `questions-answers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `questions` (`id`,`body`,`date`,`name`,`helpfulness`,`reported`) VALUES
-- ('','','','','','');
-- INSERT INTO `answers` (`id`,`body`,`date`,`name`,`helpfulness`,`reported`) VALUES
-- ('','','','','','');
-- INSERT INTO `questions-answers` (`question_id`,`answer_id`) VALUES
-- ('','');
-- INSERT INTO `photos` (`id`,`url`,`answer_id`) VALUES
-- ('','','');