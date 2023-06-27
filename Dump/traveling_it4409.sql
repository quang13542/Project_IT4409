-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: travell
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'Cà Mau'),(2,'Bắc Ninh'),(3,'Kiên Giang'),(4,'Phú Yên'),(5,'Tiền Giang'),(6,'Sóc Trăng'),(7,'Cần Thơ'),(8,'Thái Nguyên'),(9,'Hà Nam'),(10,'Hà Nội'),(11,'Bình Thuận'),(12,'Lạng Sơn'),(13,'Bạc Liêu'),(14,'Thừa Thiên-Huế'),(15,'Tuyên Quang'),(16,'Ninh Bình'),(17,'Hậu Giang'),(18,'Bến Tre'),(19,'Đồng Nai'),(20,'Lào Cai'),(21,'Trà Vinh'),(22,'Nam Định'),(23,'Yên Bái'),(24,'Khánh Hòa'),(25,'Bà Rịa-Vũng Tàu'),(26,'Hòa Bình'),(27,'Đà Nẵng'),(28,'Ninh Thuận'),(29,'Quảng Nam'),(30,'Vĩnh Long'),(31,'TP. Hồ Chí Minh'),(32,'Đồng Tháp'),(33,'Thanh Hóa'),(34,'Hà Tĩnh'),(35,'Sơn La'),(36,'Quảng Ninh'),(37,'Quảng Ngãi'),(38,'Nghệ An'),(39,'Phú Thọ'),(40,'Hải Phòng'),(41,'Long An'),(42,'Quảng Bình'),(43,'Vĩnh Phúc'),(44,'Bình Định'),(45,'Hải Dương'),(46,'Bắc Giang'),(47,'Quảng Trị'),(48,'An Giang'),(49,'Hòa Bình'),(50,'Bắc Kạn');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel`
--

DROP TABLE IF EXISTS `hotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotel` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `city_id` int NOT NULL,
  `rating` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `city_id` (`city_id`),
  CONSTRAINT `hotel_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel`
--

LOCK TABLES `hotel` WRITE;
/*!40000 ALTER TABLE `hotel` DISABLE KEYS */;
INSERT INTO `hotel` VALUES (1,'Starry Sky Hotel',32,3),(2,'Dream Oasis Hotel',23,4),(3,'Paradise Meadows Hotel',41,3),(4,'Mystical Manor Hotel',21,4),(5,'Tranquility Shores Hotel',32,4),(6,'Willow Tree Hotel',49,3),(7,'Starstruck Sands Hotel',18,5),(8,'Ivory Breeze Hotel',40,3),(9,'Lily Blossom Hotel',3,4),(10,'Mountain Retreat Hotel',22,5),(11,'Radiant Orchid Hotel',28,3),(12,'Spring Serenade Hotel',1,4),(13,'Enchanted Paradise Hotel',44,5),(14,'Crystal Haven Hotel',6,5),(15,'Tranquil Retreat Hotel',31,5),(16,'Aurora Sky Hotel',47,4),(17,'Meadowbrook Hotel',50,3),(18,'Secret Garden Hotel',42,4),(19,'Lily Springs Hotel',48,3),(20,'Sunrise Sanctuary Hotel',11,5),(21,'Paradise Manor Hotel',34,4),(22,'Silver Pine Hotel',24,4),(23,'Aurora Valley Hotel',6,4),(24,'Harmony Gardens Hotel',8,4),(25,'Tranquil Haven Hotel',16,5),(26,'Dreamland Retreat Hotel',18,5),(27,'Spring Symphony Hotel',11,4),(28,'Secret Sanctuary Hotel',22,4),(29,'Sunset Beach Hotel',40,4),(30,'Azure Bay Hotel',38,4),(31,'Dreamland Meadows Hotel',33,3),(32,'Coastal Crest Hotel',24,3),(33,'Harmony Cove Hotel',8,3),(34,'Harmony Heights Hotel',2,3),(35,'Sunset Haven Hotel',49,3),(36,'Velvet Breeze Hotel',45,4),(37,'Emerald City Hotel',4,4),(38,'Velvet View Hotel',12,3),(39,'Moonlit Haven Hotel',49,3),(40,'Tranquility Point Hotel',16,5),(41,'Silver Star Hotel',12,3),(42,'Azure Dream Hotel',30,4),(43,'Serendipity Sands Hotel',24,5),(44,'Whispering Woods Hotel',11,5),(45,'Diamond Haven Hotel',37,3),(46,'Aurora Borealis Hotel',22,4),(47,'Radiant Woods Hotel',45,4),(48,'Harmony View Hotel',6,3),(49,'Tranquility Pines Hotel',46,4),(50,'Crystal Waters Hotel',39,3);
/*!40000 ALTER TABLE `hotel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room` (
  `id` int NOT NULL AUTO_INCREMENT,
  `adults` int NOT NULL,
  `children` int NOT NULL,
  `hotel_id` int NOT NULL,
  `url` varchar(256) DEFAULT NULL,
  `position_detail` varchar(256) DEFAULT NULL,
  `price` varchar(256) DEFAULT NULL,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `room_fk_1` (`hotel_id`),
  CONSTRAINT `room_fk_1` FOREIGN KEY (`hotel_id`) REFERENCES `hotel` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (1,3,0,24,'https://cf.bstatic.com/images/hotel/max1024x768/257/257942210.jpg','Phòng nghỉ được trang bị TV màn hình phẳng, ga trải giường và khăn tắm, bếp chung và WiFi miễn phí trong toàn bộ khuôn viên\'','599000','homestay'),(2,3,1,10,'https://cf.bstatic.com/xdata/images/hotel/max1024x768/213793398.jpg?k=ea9e528bef06cc94a8c58d37089ef286ae4c3aae1751e605312a8297e88e703f&o=&hp=1','Không gian phòng được thiết kế với sự cân đối giữa sự sang trọng và thoải mái,  có kệ đựng đồ và tủ quần áo rộng rãi','829000','resort'),(3,1,2,21,'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465519738.jpg?k=90727e2d53a20ce888e4a5d0c57613818d31e6f602b837162b9fade1e1eaf71e&o=&hp=1','hòng của khách sạn rộng rãi và thoáng mát, với không gian đủ để di chuyển và thư giãn, chiếc giường lớn và êm ái nằm ở giữa phòng, tạo điểm tập trung chính, màu sắc trong phòng được sử dụng ...','689000','homestay'),(4,1,0,28,'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463945925.jpg?k=cda71e2d3e0343af2cb5d53254ff64f620a254dddbe8fd1235bcc05c71dc43f1&o=&hp=1','Phòng trong khách sạn rộng rãi với không gian thoáng đãng, không gian lưu trữ rộng rãi ,trong phòng có  giường lớn và êm ái với chăn trải mềm mại, nội thất đầy đủ, dịch vụ 24/24, Wi-Fi miễn phí...','459000','resort'),(5,2,1,34,'https://cf.bstatic.com/xdata/images/hotel/max1280x900/207073612.jpg?k=8de8a008fc9d67225830e6528aa248d0f951af53bc8fb21237cc9d4e5ebbfcf2&o=&hp=1','Phòng nghỉ được trang bị TV màn hình phẳng, ga trải giường và khăn tắm, bếp chung và WiFi miễn phí trong toàn bộ khuôn viên\'','609000','khách sạn'),(6,3,2,14,'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463945725.jpg?k=2c9cda9884d826a6a9ff6cb114c2f82b23e5ad697927e5b0a08f21ac6e0104b4&o=&hp=1','Phòng của khách sạn được trang bị nội thất hiện đại và sang trọng, không gian phòng rộng rãi, cho phép khách hàng thoải mái di chuyển\'Phòng nghỉ được trang bị TV màn hình phẳng, ga trải giường và khăn tắm, bếp chung và WiFi miễn phí trong toàn bộ khuôn viê','2899000','resort'),(7,1,0,13,'https://cf.bstatic.com/images/hotel/max1024x768/184/184828929.jpg','Phòng của khách sạn được thiết kế sang trọng với màu sắc trung tính và trang nhã, không gian trong phòng rộng rãi , các vật dụng nội thất trong phòng được bố trí hài hòa và tinh tế, được trang bị g...','979000','homestay'),(8,3,1,39,'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465519805.jpg?k=8b3f1aef02b0c264204fbc4e16106a5599290f3a308e80be1d4d724597f6e20b&o=&hp=1','Phòng khách sạn rộng rãi và trang bị nội thất hiện đại, có giường lớn ,máy lạnh và điều hòa không khí, dịch vụ phòng hàng ngày để giữ phòng luôn sạch sẽ và gọn gàng','1299000','khách sạn'),(9,5,2,12,'https://cf.bstatic.com/xdata/images/hotel/max1024x768/207073530.jpg?k=aae3150146661d311626c2693dcb9c416d3d76ccb51da22022695fcfd81f2bc0&o=&hp=1','Căn hộ có TV màn hình phẳng và phòng tắm riêng với đồ vệ sinh cá nhân miễn phí, máy sấy và vòi sen. Để thuận tiện hơn, chỗ nghỉ có thể cung cấp khăn tắm và bộ khăn trải giường với một khoản...','469000','resort'),(10,1,0,20,'https://cf.bstatic.com/xdata/images/hotel/max1024x768/207073549.jpg?k=bd08857553bf61a105ebf3ea29d5b65de96dd61f0ec0f0524b086876643d14c0&o=&hp=1','Căn hộ có TV màn hình phẳng và phòng tắm riêng với đồ vệ sinh cá nhân miễn phí, máy sấy và vòi sen. Để thuận tiện hơn, chỗ nghỉ có thể cung cấp khăn tắm và bộ khăn trải giường với một khoản...','2999000','khách sạn'),(11,1,1,8,'https://cf.bstatic.com/images/hotel/max1024x768/236/236539050.jpg','Phòng của khách sạn được thiết kế sang trọng với màu sắc trung tính và trang nhã, không gian trong phòng rộng rãi, mang lại cảm giác thoải mái và thoáng đãng, các vật dụng nội thất trong phòng được b...','919000','homestay'),(12,4,2,4,'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465519731.jpg?k=6c00bfb8b1871e79c6169be46be00213934b0b2bb184f20cdcb4bc4e65e1ee03&o=&hp=1','Phòng của khách sạn rộng rãi và sáng sủa với cửa sổ lớn nhìn ra phong cảnh tuyệt đẹp, có giường lớn và trang thiết bị cao cấp','989000','khách sạn'),(13,3,0,31,'https://cf.bstatic.com/images/hotel/max1024x768/184/184828722.jpg','Căn hộ có TV màn hình phẳng và phòng tắm riêng với đồ vệ sinh cá nhân miễn phí, máy sấy và vòi sen. Để thuận tiện hơn, chỗ nghỉ có thể cung cấp khăn tắm và bộ khăn trải giường với một khoản...','699000','homestay'),(14,5,1,27,'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463945805.jpg?k=bd1aa4758614c079eaa9c24c3419e0ddf5e16c31c547e30aec0b30eef9ddd2b5&o=&hp=1','Căn hộ có TV màn hình phẳng và phòng tắm riêng với đồ vệ sinh cá nhân miễn phí, máy sấy và vòi sen. Để thuận tiện hơn, chỗ nghỉ có thể cung cấp khăn tắm và bộ khăn trải giường với một khoản...','749000','khách sạn'),(15,3,2,29,'https://cf.bstatic.com/xdata/images/hotel/max1280x900/173222256.jpg?k=785ec93303cac9714b7faa978eca765fb08f4aad58e36e625b91e02629552e93&o=&hp=1','Phòng khách sạn rộng rãi và trang bị nội thất hiện đại, có giường lớn ,máy lạnh và điều hòa không khí, dịch vụ phòng hàng ngày để giữ phòng luôn sạch sẽ và gọn gàng','839000','khách sạn'),(16,4,0,33,'https://cf.bstatic.com/images/hotel/max1024x768/988/98840472.jpg','Phòng trong khách sạn rộng rãi với không gian thoáng đãng, không gian lưu trữ rộng rãi ,trong phòng có  giường lớn và êm ái với chăn trải mềm mại, nội thất đầy đủ, dịch vụ 24/24','619000','homestay'),(17,5,1,26,'https://cf.bstatic.com/images/hotel/max1024x768/988/98891395.jpg','Phòng của khách sạn ở có không gian rộng rãi và thoáng đãng,  một giường lớn và êm ái, màu sắc của phòng tạo cảm giác ấm cúng và thân thiện, phòng được làm sạch hàng ngày, giữ cho không gian luôn...','2199000','khách sạn'),(18,5,2,38,'https://cf.bstatic.com/xdata/images/hotel/max1024x768/173222225.jpg?k=f3e68af29f00dc1a7c2ec394143b8af1faf6d89529a41854c5f0cba94148dd8b&o=&hp=1','Căn hộ có TV màn hình phẳng và phòng tắm riêng với đồ vệ sinh cá nhân miễn phí, máy sấy và vòi sen. Để thuận tiện hơn, chỗ nghỉ có thể cung cấp khăn tắm và bộ khăn trải giường với một khoản...','929000','khách sạn'),(19,1,0,33,'https://cf.bstatic.com/images/hotel/max1024x768/446/446709403.jpg','Phòng trong khách sạn rộng rãi với không gian thoải mái và sạch sẽ, nội thất của phòng được thiết kế sang trọng, cửa sổ lớn trong phòng cho phép ánh sáng tự nhiên lọt vào ','1399000','homestay'),(20,4,1,13,'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465519745.jpg?k=1119f0a1f67ebd513dab3fb885eede8625b653dd52fbb989ccda0be1dee1933b&o=&hp=1','hòng của khách sạn rộng rãi và thoáng mát, với không gian đủ để di chuyển và thư giãn, chiếc giường lớn và êm ái nằm ở giữa phòng, tạo điểm tập trung chính, màu sắc trong phòng được sử dụng ...','759000','khách sạn'),(21,3,2,28,'https://cf.bstatic.com/images/hotel/max1024x768/446/446710359.jpg','Phòng nghỉ được trang bị TV màn hình phẳng, ga trải giường và khăn tắm, bếp chung và WiFi miễn phí trong toàn bộ khuôn viên\'','2299000','khách sạn'),(22,2,0,2,'https://cf.bstatic.com/xdata/images/hotel/max1024x768/173222258.jpg?k=8861bf5ca0b3184bb09f5b9b807ecbc0d98248ecaf2a70525805778ead01cf9c&o=&hp=1','Căn hộ có TV màn hình phẳng và phòng tắm riêng với đồ vệ sinh cá nhân miễn phí, máy sấy và vòi sen. Để thuận tiện hơn, chỗ nghỉ có thể cung cấp khăn tắm và bộ khăn trải giường với một khoản...','999000','homestay'),(23,3,1,36,'https://cf.bstatic.com/images/hotel/max1024x768/184/184828958.jpg','Phòng khách sạn rộng rãi với sàn gỗ và trang bị nội thất hiện đại, cửa sổ toàn cảnh trong phòng tạo cảm giác thoáng đãng và tiếp nhận ánh sáng tự nhiên, giường lớn và êm ái với chăn mền mềm...','479000','homestay'),(24,1,2,47,'https://cf.bstatic.com/images/hotel/max1024x768/184/184828824.jpg','Phòng trong khách sạn rộng rãi với không gian thoáng đãng, không gian lưu trữ rộng rãi ,trong phòng có  giường lớn và êm ái với chăn trải mềm mại, nội thất đầy đủ, dịch vụ 24/24, Wi-Fi miễn phí...','849000','resort'),(25,4,0,43,'https://cf.bstatic.com/images/hotel/max1024x768/988/98890222.jpg','Phòng nghỉ được trang bị TV màn hình phẳng, ga trải giường và khăn tắm, bếp chung và WiFi miễn phí trong toàn bộ khuôn viê','1499000','khách sạn'),(26,5,1,26,'https://cf.bstatic.com/images/hotel/max1024x768/184/184828929.jpg','Căn hộ có TV màn hình phẳng và phòng tắm riêng với đồ vệ sinh cá nhân miễn phí, máy sấy và vòi sen. Để thuận tiện hơn, chỗ nghỉ có thể cung cấp khăn tắm và bộ khăn trải giường với một khoản...','399000','khách sạn'),(27,5,2,41,'https://cf.bstatic.com/xdata/images/hotel/max1024x768/207073549.jpg?k=bd08857553bf61a105ebf3ea29d5b65de96dd61f0ec0f0524b086876643d14c0&o=&hp=1','Phòng nghỉ được trang bị TV màn hình phẳng, ga trải giường và khăn tắm, bếp chung và WiFi miễn phí trong toàn bộ khuôn viên\'','2399000','homestay'),(28,3,0,7,'https://cf.bstatic.com/xdata/images/hotel/max1280x900/173222256.jpg?k=785ec93303cac9714b7faa978eca765fb08f4aad58e36e625b91e02629552e93&o=&hp=1','Căn hộ có TV màn hình phẳng và phòng tắm riêng với đồ vệ sinh cá nhân miễn phí, máy sấy và vòi sen. Để thuận tiện hơn, chỗ nghỉ có thể cung cấp khăn tắm và bộ khăn trải giường với một khoản...','769000','resort'),(29,3,1,7,'https://cf.bstatic.com/images/hotel/max1024x768/236/236539050.jpg','Căn hộ có TV màn hình phẳng và phòng tắm riêng với đồ vệ sinh cá nhân miễn phí, máy sấy và vòi sen. Để thuận tiện hơn, chỗ nghỉ có thể cung cấp khăn tắm và bộ khăn trải giường với một khoản...','489000','khách sạn'),(30,2,2,12,'https://cf.bstatic.com/images/hotel/max1024x768/257/257942210.jpg','hòng của khách sạn rộng rãi và thoáng mát, với không gian đủ để di chuyển và thư giãn, chiếc giường lớn và êm ái nằm ở giữa phòng, tạo điểm tập trung chính, màu sắc trong phòng được sử dụng ...','539000','homestay'),(31,4,0,15,'https://cf.bstatic.com/images/hotel/max1024x768/184/184828722.jpg','Phòng của khách sạn ở có không gian rộng rãi và thoáng đãng,  một giường lớn và êm ái, màu sắc của phòng tạo cảm giác ấm cúng và thân thiện, phòng được làm sạch hàng ngày, giữ cho không gian luôn...','939000','khách sạn'),(32,1,1,10,'https://cf.bstatic.com/xdata/images/hotel/max1024x768/173222225.jpg?k=f3e68af29f00dc1a7c2ec394143b8af1faf6d89529a41854c5f0cba94148dd8b&o=&hp=1','Phòng trong khách sạn rộng rãi với không gian thoáng đãng, không gian lưu trữ rộng rãi ,trong phòng có  giường lớn và êm ái với chăn trải mềm mại, nội thất đầy đủ, dịch vụ 24/24, Wi-Fi miễn phí...','1599000','homestay'),(33,4,2,33,'https://cf.bstatic.com/images/hotel/max1024x768/446/446710359.jpg','Phòng trong khách sạn rộng rãi với không gian thoáng đãng và ánh sáng tự nhiên, cửa sổ lớn trong phòng cho phép tầm nhìn tuyệt vời ra phố thành phố xung quanh, trang trí nội thất sang trọng với sử dụng...','859000','resort'),(34,5,0,35,'https://cf.bstatic.com/xdata/images/hotel/max1024x768/173222258.jpg?k=8861bf5ca0b3184bb09f5b9b807ecbc0d98248ecaf2a70525805778ead01cf9c&o=&hp=1','Phòng nghỉ được trang bị TV màn hình phẳng, ga trải giường và khăn tắm, bếp chung và WiFi miễn phí trong toàn bộ khuôn viên\'','779000','khách sạn'),(35,3,1,44,'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463945925.jpg?k=cda71e2d3e0343af2cb5d53254ff64f620a254dddbe8fd1235bcc05c71dc43f1&o=&hp=1','Không gian phòng rộng rãi, tiện nghi phòng , tầm nhìn từ phòng ra thành phố/hướng biển/quang cảnh xung quanh rất đẹp','629000','homestay'),(36,2,2,6,'https://cf.bstatic.com/images/hotel/max1024x768/988/98840472.jpg','Phòng trong khách sạn rộng rãi với không gian thoáng đãng và ánh sáng tự nhiên, cửa sổ lớn trong phòng cho phép tầm nhìn tuyệt vời ra phố thành phố xung quanh, trang trí nội thất sang trọng với sử dụng...','549000','resort'),(37,1,0,39,'https://cf.bstatic.com/images/hotel/max1024x768/988/98891395.jpg','Căn hộ có TV màn hình phẳng và phòng tắm riêng với đồ vệ sinh cá nhân miễn phí, máy sấy và vòi sen. Để thuận tiện hơn, chỗ nghỉ có thể cung cấp khăn tắm và bộ khăn trải giường với một khoản...','869000','homestay'),(38,4,1,49,'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463945725.jpg?k=2c9cda9884d826a6a9ff6cb114c2f82b23e5ad697927e5b0a08f21ac6e0104b4&o=&hp=1','Căn hộ có TV màn hình phẳng và phòng tắm riêng với đồ vệ sinh cá nhân miễn phí, máy sấy và vòi sen. Để thuận tiện hơn, chỗ nghỉ có thể cung cấp khăn tắm và bộ khăn trải giường với một khoản...','879000','khách sạn'),(39,4,2,48,'https://cf.bstatic.com/images/hotel/max1024x768/184/184828958.jpg','Phòng của khách sạn tôi ở có không gian rộng rãi và thoáng đãng, trong phòng được chào đón bởi một giường lớn và êm ái, màu sắc của phòng tạo cảm giác ấm cúng và thân thiện, từ cửa sổ phòng c...','639000','homestay'),(40,1,0,6,'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465519731.jpg?k=6c00bfb8b1871e79c6169be46be00213934b0b2bb184f20cdcb4bc4e65e1ee03&o=&hp=1','hòng của khách sạn rộng rãi và thoáng mát, với không gian đủ để di chuyển và thư giãn, chiếc giường lớn và êm ái nằm ở giữa phòng, tạo điểm tập trung chính, màu sắc trong phòng được sử dụng ...','559000','resort'),(41,4,1,18,'https://cf.bstatic.com/xdata/images/hotel/max1024x768/213793398.jpg?k=ea9e528bef06cc94a8c58d37089ef286ae4c3aae1751e605312a8297e88e703f&o=&hp=1','Phòng khách sạn rộng rãi và trang bị nội thất hiện đại, có giường lớn ,máy lạnh và điều hòa không khí, dịch vụ phòng hàng ngày để giữ phòng luôn sạch sẽ và gọn gàng','409000','khách sạn'),(42,3,2,27,'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465519738.jpg?k=90727e2d53a20ce888e4a5d0c57613818d31e6f602b837162b9fade1e1eaf71e&o=&hp=1','Phòng nghỉ được trang bị TV màn hình phẳng, ga trải giường và khăn tắm, bếp chung và WiFi miễn phí trong toàn bộ khuôn viên\'','649000','homestay'),(43,1,0,23,'https://cf.bstatic.com/xdata/images/hotel/max1280x900/207073612.jpg?k=8de8a008fc9d67225830e6528aa248d0f951af53bc8fb21237cc9d4e5ebbfcf2&o=&hp=1','Phòng của khách sạn được trang bị nội thất hiện đại và sang trọng, không gian phòng rộng rãi, cho phép khách hàng thoải mái di chuyển','949000','resort'),(44,5,1,40,'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463945805.jpg?k=bd1aa4758614c079eaa9c24c3419e0ddf5e16c31c547e30aec0b30eef9ddd2b5&o=&hp=1','Phòng nghỉ được trang bị TV màn hình phẳng, ga trải giường và khăn tắm, bếp chung và WiFi miễn phí trong toàn bộ khuôn viên\'','889000','khách sạn'),(45,5,2,15,'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465519805.jpg?k=8b3f1aef02b0c264204fbc4e16106a5599290f3a308e80be1d4d724597f6e20b&o=&hp=1','Căn hộ có TV màn hình phẳng và phòng tắm riêng với đồ vệ sinh cá nhân miễn phí, máy sấy và vòi sen. Để thuận tiện hơn, chỗ nghỉ có thể cung cấp khăn tắm và bộ khăn trải giường với một khoản...','499000','homestay'),(46,2,0,38,'https://cf.bstatic.com/images/hotel/max1024x768/446/446709403.jpg','Phòng nghỉ được trang bị TV màn hình phẳng, ga trải giường và khăn tắm, bếp chung và WiFi miễn phí trong toàn bộ khuôn viên\'','959000','resort'),(47,2,1,49,'https://cf.bstatic.com/xdata/images/hotel/max1024x768/207073530.jpg?k=aae3150146661d311626c2693dcb9c416d3d76ccb51da22022695fcfd81f2bc0&o=&hp=1','Phòng của khách sạn được thiết kế sang trọng với màu sắc trung tính và trang nhã, không gian trong phòng rộng rãi , các vật dụng nội thất trong phòng được bố trí hài hòa và tinh tế, được trang bị g...','2499000','khách sạn'),(48,3,2,41,'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465519745.jpg?k=1119f0a1f67ebd513dab3fb885eede8625b653dd52fbb989ccda0be1dee1933b&o=&hp=1','Phòng trong khách sạn rộng rãi với không gian thoáng đãng, không gian lưu trữ rộng rãi ,trong phòng có  giường lớn và êm ái với chăn trải mềm mại, nội thất đầy đủ, dịch vụ 24/24, Wi-Fi miễn phí...','1699000','homestay'),(49,2,0,17,'https://cf.bstatic.com/images/hotel/max1024x768/184/184828824.jpg','Không gian phòng được thiết kế với sự cân đối giữa sự sang trọng và thoải mái,  có kệ đựng đồ và tủ quần áo rộng rãi','2599000','resort'),(50,2,1,22,'https://cf.bstatic.com/images/hotel/max1024x768/988/98890222.jpg','Phòng trong khách sạn rộng rãi với không gian thoáng đãng, không gian lưu trữ rộng rãi ,trong phòng có  giường lớn và êm ái với chăn trải mềm mại, nội thất đầy đủ, dịch vụ 24/24','1799000','homestay');
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service` (
  `id` int NOT NULL AUTO_INCREMENT,
  `room_id` int NOT NULL,
  `checkin` datetime DEFAULT NULL,
  `checkout` datetime DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `nights` int NOT NULL,
  `duty` tinyint(1) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `room_id` (`room_id`),
  KEY `service_ibfk_2_idx` (`user_id`),
  CONSTRAINT `service_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`) ON DELETE CASCADE,
  CONSTRAINT `service_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `checkin_smaller_than_checkout` CHECK ((`checkin` < `checkout`))
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
INSERT INTO `service` VALUES (1,3,'2023-05-29 19:22:54','2023-06-05 10:42:56',5,5,1,1022),(2,23,'2023-06-27 00:54:37','2023-07-01 09:29:27',5,4,1,1001),(3,18,'2023-06-27 00:54:37','2023-06-29 20:29:36',2,2,1,1027),(4,42,'2023-06-27 00:54:36','2023-06-28 21:27:39',3,1,0,1022),(5,20,'2023-06-27 00:54:37','2023-07-03 06:30:52',4,6,0,1039),(6,46,'2023-06-14 17:18:09','2023-06-21 01:40:55',2,5,1,1030),(7,30,'2023-06-30 06:21:33','2023-07-07 03:12:05',2,7,1,1046),(8,18,'2023-06-08 07:10:34','2023-06-14 14:55:08',5,6,0,1038),(9,19,'2023-06-06 07:04:00','2023-06-13 02:23:22',2,6,1,1017),(10,47,'2023-06-14 20:59:38','2023-06-15 22:27:40',3,1,0,1046),(11,39,'2023-06-14 05:38:40','2023-06-18 18:39:37',2,3,1,1048),(12,3,'2023-05-31 19:25:11','2023-06-05 02:30:35',4,5,1,1016),(13,27,'2023-06-14 09:35:13','2023-06-19 12:03:37',4,5,1,1003),(14,11,'2023-06-24 02:14:32','2023-06-27 04:34:51',5,3,0,1010),(15,10,'2023-06-24 11:45:25','2023-06-29 12:30:07',5,5,0,1043),(16,19,'2023-06-27 00:54:36','2023-07-01 21:09:15',3,4,0,1047),(17,2,'2023-06-18 21:51:59','2023-06-25 18:51:19',2,7,1,1023),(18,34,'2023-06-27 00:54:37','2023-07-02 00:17:53',5,5,0,1008),(19,29,'2023-06-30 12:06:19','2023-07-05 22:56:35',3,5,0,1032),(20,24,'2023-06-02 18:02:47','2023-06-04 21:29:50',4,2,0,1045),(21,14,'2023-06-20 19:30:23','2023-06-24 02:32:31',2,4,0,NULL),(22,10,'2023-06-27 00:54:37','2023-07-03 13:03:25',5,5,1,1036),(23,33,'2023-06-27 00:54:37','2023-06-29 02:27:44',3,2,1,1008),(24,12,'2023-06-11 05:32:35','2023-06-12 12:43:29',4,1,1,1012),(25,15,'2023-06-28 02:18:43','2023-07-03 00:36:49',3,5,0,1024),(26,34,'2023-06-02 19:05:48','2023-06-04 17:54:11',2,2,1,1027),(27,32,'2023-06-27 00:54:36','2023-07-02 21:44:14',3,5,0,1034),(28,20,'2023-06-27 00:54:37','2023-06-28 01:51:27',2,1,1,1015),(29,34,'2023-06-27 00:54:36','2023-07-03 01:46:56',4,6,0,1012),(30,36,'2023-06-30 11:29:23','2023-07-03 15:28:55',2,3,0,1021),(31,5,'2023-06-10 18:41:43','2023-06-13 21:20:48',2,3,0,1002),(32,16,'2023-06-19 07:12:37','2023-06-23 23:18:07',4,4,0,1044),(33,8,'2023-06-27 00:54:36','2023-06-28 12:25:47',4,1,0,1017),(34,44,'2023-06-16 15:50:34','2023-06-18 14:05:22',4,2,1,1009),(35,10,'2023-06-27 00:54:37','2023-06-29 11:25:27',4,2,0,1007),(36,22,'2023-06-27 00:54:36','2023-07-03 09:51:20',4,5,0,1034),(37,1,'2023-06-13 20:30:41','2023-06-19 02:15:10',2,6,0,1044),(38,41,'2023-06-27 00:54:37','2023-07-03 12:33:34',4,6,1,1040),(39,13,'2023-07-04 20:47:01','2023-07-11 03:05:45',3,7,0,1006),(40,41,'2023-06-27 00:54:37','2023-06-29 06:44:24',5,2,0,1034),(41,5,'2023-06-28 13:39:56','2023-07-04 16:40:26',5,6,1,1025),(42,30,'2023-06-07 09:32:22','2023-06-10 22:00:19',3,4,0,1014),(43,3,'2023-06-27 00:54:36','2023-07-03 22:37:16',5,5,0,1009),(44,44,'2023-06-13 14:43:25','2023-06-14 11:10:50',5,1,1,NULL),(45,4,'2023-07-02 10:57:29','2023-07-08 04:51:55',4,6,1,1003),(46,25,'2023-06-20 15:08:11','2023-06-22 00:56:20',3,2,0,1035),(47,34,'2023-06-27 00:54:36','2023-07-01 23:55:18',4,4,0,1047),(48,36,'2023-06-24 22:08:31','2023-06-30 03:38:43',5,6,1,NULL),(49,43,'2023-06-03 14:23:55','2023-06-07 01:48:19',4,3,1,NULL),(50,24,'2023-06-18 19:49:40','2023-06-19 22:48:56',4,1,1,NULL);
/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1051 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1001,'Nguyễn Văn An','12345678','nguyenvanan@gmail.com'),(1002,'Trần Thị Bình','abcdefgh','tranthibinh@gmail.com'),(1003,'Lê Hoàng Cường','qwertyui','lehoangcuong@gmail.com'),(1004,'Phạm Thị Dung','zxcvbnmn','phamthidung@gmail.com'),(1005,'Hoàng Văn Dương','poiuytre','hoangvanduong@gmail.com'),(1006,'Lương Thị Hà','lkjhgfds','luongthiha@gmail.com'),(1007,'Nguyễn Văn Hiển','mnbvcxza','nguyenvanhien@gmail.com'),(1008,'Đỗ Thị Hoa','09876543','dothihoa@gmail.com'),(1009,'Trần Văn Hùng','76543210','tranvanhung@gmail.com'),(1010,'Nguyễn Thị Hường','10293847','nguyenthihuong@gmail.com'),(1011,'Trương Văn Huy','qwertyui','truongvanhuy@gmail.com'),(1012,'Bùi Thị Kiều','abcdefgh','buithikieu@gmail.com'),(1013,'Lê Văn Lâm','zxcvbnmn','levanlam@gmail.com'),(1014,'Nguyễn Thị Loan','poiuytre','nguyenthiloan@gmail.com'),(1015,'Vũ Thị Ly','lkjhgfds','vuthily@gmail.com'),(1016,'Trần Văn Minh','mnbvcxza','tranvanminh@gmail.com'),(1017,'Phạm Thị Mỹ','12345678','phamthimy@gmail.com'),(1018,'Lê Văn Nam','qwertyui','levannam@gmail.com'),(1019,'Trần Thị Ngân','zxcvbnmn','tranthingan@gmail.com'),(1020,'Phạm Văn Nghĩa','poiuytre','phamvannghia@gmail.com'),(1021,'Đinh Thị Nhung','lkjhgfds','dinhthinghung@gmail.com'),(1022,'Lê Văn Phong','mnbvcxza','levanphong@gmail.com'),(1023,'Trần Thị Phương','09876543','tranthiphuong@gmail.com'),(1024,'Phạm Văn Quân','76543210','phamvanquan@gmail.com'),(1025,'Lê Thị Quỳnh','10293847','lethiquynh@gmail.com'),(1026,'Nguyễn Thị Sương','qwertyui','nguyenthisuong@gmail.com'),(1027,'Vũ Văn Tài','abcdefgh','vuvantai@gmail.com'),(1028,'Lý Thị Thu','zxcvbnmn','lythithu@gmail.com'),(1029,'Hoàng Văn Thắng','poiuytre','hoangvanthang@gmail.com'),(1030,'Trần Thị Thảo','lkjhgfds','tranthithao@gmail.com'),(1031,'Nguyễn Văn Thiên','mnbvcxza','nguyenvanthien@gmail.com'),(1032,'Phạm Thị Trang','12345678','phamthitrang@gmail.com'),(1033,'Lê Văn Trung','qwertyui','levantrung@gmail.com'),(1034,'Trần Thị Tuyết','zxcvbnmn','tranthituyet@gmail.com'),(1035,'Nguyễn Văn Tùng','poiuytre','nguyenvantung@gmail.com'),(1036,'Lương Thị Uyên','lkjhgfds','luongthiuyen@gmail.com'),(1037,'Nguyễn Văn Việt','mnbvcxza','nguyenvanviet@gmail.com'),(1038,'Đỗ Thị Xuân','09876543','dothixuan@gmail.com'),(1039,'Trần Văn Yên','76543210','tranvanyen@gmail.com'),(1040,'Nguyễn Thị Yến','10293847','nguyenthiyen@gmail.com'),(1041,'Trần Văn Đạt','qwertyui','tranvandat@gmail.com'),(1042,'Phạm Thị Điệp','abcdefgh','phamthidiep@gmail.com'),(1043,'Lê Văn Đông','zxcvbnmn','levandong@gmail.com'),(1044,'Nguyễn Thị Giang','poiuytre','nguyenthigiang@gmail.com'),(1045,'Vũ Văn Hải','lkjhgfds','vuvanhai@gmail.com'),(1046,'Lý Thị Hoài','mnbvcxza','lythihoai@gmail.com'),(1047,'Hoàng Văn Hùng','12345678','hoangvanhung@gmail.com'),(1048,'Trần Thị Hương','qwertyui','tranthihuong@gmail.com'),(1049,'Nguyễn Văn Long','zxcvbnmn','nguyenvanlong@gmail.com'),(1050,'Phạm Thị Mai','poiuytre','phamthimai@gmail.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-27  9:41:02
