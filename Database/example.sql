-- MariaDB dump 10.19-11.2.2-MariaDB, for osx10.19 (x86_64)
--
-- Host: localhost    Database: example
-- ------------------------------------------------------
-- Server version	11.2.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `CUSTOMERS`
--

DROP TABLE IF EXISTS `CUSTOMERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CUSTOMERS` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(20) NOT NULL,
  `AGE` int(11) NOT NULL,
  `ADDRESS` char(25) DEFAULT NULL,
  `SALARY` decimal(18,2) DEFAULT NULL,
  PRIMARY KEY (`ID`,`NAME`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CUSTOMERS`
--

LOCK TABLES `CUSTOMERS` WRITE;
/*!40000 ALTER TABLE `CUSTOMERS` DISABLE KEYS */;
/*!40000 ALTER TABLE `CUSTOMERS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adress`
--

DROP TABLE IF EXISTS `adress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adress` (
  `address_id` int(11) NOT NULL,
  `userid_fk` int(11) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `City` varchar(255) DEFAULT NULL,
  `Postal` varchar(255) DEFAULT NULL,
  `Country` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`address_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adress`
--

LOCK TABLES `adress` WRITE;
/*!40000 ALTER TABLE `adress` DISABLE KEYS */;
INSERT INTO `adress` VALUES
(1,1,'Obere Str.60','Berlin','12209','Germany'),
(2,1,'7880 Essex Avenue','Springfield','55525','USA'),
(3,2,'8888 Branch Avenue','Texas','88889','USA');
/*!40000 ALTER TABLE `adress` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_colors`
--

DROP TABLE IF EXISTS `car_colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `car_colors` (
  `model_id` int(11) NOT NULL,
  `color` varchar(20) NOT NULL,
  PRIMARY KEY (`model_id`,`color`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_colors`
--

LOCK TABLES `car_colors` WRITE;
/*!40000 ALTER TABLE `car_colors` DISABLE KEYS */;
INSERT INTO `car_colors` VALUES
(1,'red'),
(2,'green'),
(3,'blue'),
(4,'green'),
(5,'red');
/*!40000 ALTER TABLE `car_colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_styles`
--

DROP TABLE IF EXISTS `car_styles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `car_styles` (
  `model_id` int(11) NOT NULL,
  `styles` varchar(20) NOT NULL,
  PRIMARY KEY (`model_id`,`styles`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_styles`
--

LOCK TABLES `car_styles` WRITE;
/*!40000 ALTER TABLE `car_styles` DISABLE KEYS */;
INSERT INTO `car_styles` VALUES
(1,'4 Door sedan'),
(2,'4 Door sedan'),
(3,'pickup'),
(4,'pickup'),
(5,'pickup');
/*!40000 ALTER TABLE `car_styles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cars`
--

DROP TABLE IF EXISTS `cars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cars` (
  `model_id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`model_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cars`
--

LOCK TABLES `cars` WRITE;
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
INSERT INTO `cars` VALUES
(1,'Tesla'),
(2,'Toyota');
/*!40000 ALTER TABLE `cars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors_and_styles`
--

DROP TABLE IF EXISTS `colors_and_styles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colors_and_styles` (
  `color` varchar(20) NOT NULL,
  `styles` varchar(20) NOT NULL,
  PRIMARY KEY (`color`,`styles`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors_and_styles`
--

LOCK TABLES `colors_and_styles` WRITE;
/*!40000 ALTER TABLE `colors_and_styles` DISABLE KEYS */;
INSERT INTO `colors_and_styles` VALUES
('blue','4 Door sedan'),
('blue','pickup'),
('green','4 Door sedan'),
('green','pickup'),
('red','4 Door sedan'),
('red','pickup'),
('silver','4 Door sedan'),
('silver','pickup');
/*!40000 ALTER TABLE `colors_and_styles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `membership_type` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES
(1,1,'John Doe'),
(2,1,'Jane Doe'),
(3,2,'Jack Doe');
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `membership_type`
--

DROP TABLE IF EXISTS `membership_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `membership_type` (
  `id` int(11) NOT NULL,
  `fee` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `membership_type`
--

LOCK TABLES `membership_type` WRITE;
/*!40000 ALTER TABLE `membership_type` DISABLE KEYS */;
INSERT INTO `membership_type` VALUES
(1,100),
(2,200);
/*!40000 ALTER TABLE `membership_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phone_numbers`
--

DROP TABLE IF EXISTS `phone_numbers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `phone_numbers` (
  `phone_id` int(11) NOT NULL,
  `userid_fk` int(11) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`phone_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phone_numbers`
--

LOCK TABLES `phone_numbers` WRITE;
/*!40000 ALTER TABLE `phone_numbers` DISABLE KEYS */;
INSERT INTO `phone_numbers` VALUES
(1,1,'704-444-5555'),
(2,1,'888-3333-4444'),
(3,1,'704-888-5555'),
(4,1,'777-3333-4444'),
(5,2,'999-888-5555'),
(6,2,'999-3333-4444');
/*!40000 ALTER TABLE `phone_numbers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipes`
--

DROP TABLE IF EXISTS `recipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recipes` (
  `id` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `Instuctions` longtext DEFAULT NULL,
  `Ingridients` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes`
--

LOCK TABLES `recipes` WRITE;
/*!40000 ALTER TABLE `recipes` DISABLE KEYS */;
INSERT INTO `recipes` VALUES
(1,'Adobo','lorem ipsum dolor','Garlic, Chicken, Vinegar, Soy Sauce'),
(2,'Loco Moco','lorem ipsum dolor','Beef, Beff gravy, Egg');
/*!40000 ALTER TABLE `recipes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(1,'Alfred Jones'),
(2,'Kate Smith');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-05 14:48:27
