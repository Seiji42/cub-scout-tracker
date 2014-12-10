-- MySQL dump 10.13  Distrib 5.5.40, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: scoutdb
-- ------------------------------------------------------
-- Server version	5.5.40-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activity`
--

DROP TABLE IF EXISTS `achievement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `achievement` (
  `name` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL,
  `category_id` int(10) unsigned NOT NULL,
  `num_electives` int(10) unsigned NOT NULL,
  `achievement_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`achievement_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity`
--

/*LOCK TABLES `activity` WRITE;*/;
/*!40000 ALTER TABLE `activity` DISABLE KEYS */;
/*!40000 ALTER TABLE `activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adult`
--

DROP TABLE IF EXISTS `adult`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adult` (
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `pack_number` varchar(30) NOT NULL,
  `leader_type` varchar(30) DEFAULT NULL,
  `rank_type` varchar(30) NULL,
  `phone_number` varchar(30) NULL,
  'email' varchar(30) NULL,
  `adult_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`adult_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adult`
--

/*LOCK TABLES `adult` WRITE*/;
/*!40000 ALTER TABLE `adult` DISABLE KEYS */;
/*!40000 ALTER TABLE `adult` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `name` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL,
  `rank_id` int(10) unsigned NOT NULL,
  `num_achievments` int(10) unsigned NULL,
  `category_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

/*LOCK TABLES `category` WRITE;*/;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rank`
--

DROP TABLE IF EXISTS `rank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rank` (
  `name` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL,
  `rank_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`rank_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rank`
--

/*LOCK TABLES `rank` WRITE;*/
/*!40000 ALTER TABLE `rank` DISABLE KEYS */;
/*!40000 ALTER TABLE `rank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `record`
--

DROP TABLE IF EXISTS `record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `record` (
  `record_rank_type` varchar(30) NOT NULL,
  `date_done` varchar(30) NOT NULL,
  `requirement_id` int(10) unsigned NOT NULL,
  `scout_id` int(10) unsigned NOT NULL,
  `record_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`record_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `record`
--

/*LOCK TABLES `record` WRITE*/;
/*!40000 ALTER TABLE `record` DISABLE KEYS */;
/*!40000 ALTER TABLE `record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `requirement`
--

DROP TABLE IF EXISTS `requirement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `requirement` (
  `name` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL,
  `achievement_id` int(10) unsigned NOT NULL,
  `req_elec` varchar(30) NOT NULL,
  `requirement_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`requirement_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `requirement`
--

/*LOCK TABLES `requirement` WRITE*/;
/*!40000 ALTER TABLE `requirement` DISABLE KEYS */;
/*!40000 ALTER TABLE `requirement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scout`
--

DROP TABLE IF EXISTS `scout`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `scout` (
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `birth_date` varchar(30) NOT NULL,
  `pack_number` varchar(30) NOT NULL,
  `rank_type` varchar(30) NOT NULL,
  `parent_id` int(10) unsigned DEFAULT NULL,
  `leader_id` int(10) unsigned DEFAULT NULL,
  `scout_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`scout_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scout`
--

/*LOCK TABLES `scout` WRITE*/;
/*!40000 ALTER TABLE `scout` DISABLE KEYS */;
/*!40000 ALTER TABLE `scout` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-12-02  1:18:56
