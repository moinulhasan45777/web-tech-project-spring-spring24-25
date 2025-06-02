-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:4306
-- Generation Time: Jun 02, 2025 at 07:51 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `heritage_medical`
--

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `doctor_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `profile_picture` text NOT NULL,
  `designation` varchar(40) NOT NULL,
  `specialty` varchar(60) NOT NULL,
  `qualifications` text NOT NULL,
  `consultation_fee` int(11) NOT NULL,
  `patient_count` int(11) NOT NULL,
  `start_time` varchar(8) NOT NULL,
  `end_time` varchar(8) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`doctor_id`, `name`, `profile_picture`, `designation`, `specialty`, `qualifications`, `consultation_fee`, `patient_count`, `start_time`, `end_time`, `user_id`) VALUES
(1, 'Dr. Mohammad Sohel-Uzzaman', 'dr.shoel@hmc.com.jpg', 'Head of Department', 'Cardiology', 'MBBS (SBMC), BCS (Health), FCPS (Surgery), F-MAS, Fellowship in GI Endoscopy (Delhi)', 1500, 0, '8:00 pm', '9:30 pm', 38),
(2, 'Dr. MD Shah Newaz', '39.jpg', 'Head of Department', 'Neurosurgery', 'MBBS, BCS (Health), MS (Neurosurgery, BSMMU)', 1200, 7, '5:30 pm', '7:00 pm', 39);

-- --------------------------------------------------------

--
-- Table structure for table `medical_histories`
--

CREATE TABLE `medical_histories` (
  `medical_history_id` int(11) NOT NULL,
  `user_history` text NOT NULL,
  `family_history` text NOT NULL,
  `current_drug` varchar(255) NOT NULL,
  `previous_drug` varchar(255) NOT NULL,
  `activity_level` varchar(20) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medical_histories`
--

INSERT INTO `medical_histories` (`medical_history_id`, `user_history`, `family_history`, `current_drug`, `previous_drug`, `activity_level`, `user_id`) VALUES
(13, '', '', '', '', 'High', 36);

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `patient_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `dob` date NOT NULL,
  `phone` varchar(15) NOT NULL,
  `profile_picture` varchar(200) NOT NULL,
  `digital_signature` varchar(200) NOT NULL,
  `blood_group` varchar(5) NOT NULL,
  `address` text NOT NULL,
  `city` varchar(20) NOT NULL,
  `em_name` varchar(50) NOT NULL,
  `em_relation` varchar(30) NOT NULL,
  `em_phone` varchar(15) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`patient_id`, `name`, `dob`, `phone`, `profile_picture`, `digital_signature`, `blood_group`, `address`, `city`, `em_name`, `em_relation`, `em_phone`, `user_id`) VALUES
(18, 'Moinul Hasan', '2025-05-02', '01746670010', 'moinul.hasan45777@gmail.com.jpg', 'moinul.hasan45777@gmail.com.png', 'A-', 'kfhbifbfi', 'sfoguhsdf', 'spgkfmsfg', 'sdojn', '01715475440', 36);

-- --------------------------------------------------------

--
-- Table structure for table `staffs`
--

CREATE TABLE `staffs` (
  `staff_id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL,
  `picture` varchar(200) NOT NULL,
  `department` varchar(20) NOT NULL,
  `schedule` varchar(15) NOT NULL,
  `designation` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `staffs`
--

INSERT INTO `staffs` (`staff_id`, `name`, `picture`, `department`, `schedule`, `designation`) VALUES
(1, 'Atoshi Jaman', '1.jpg', 'Cardiology', 'Noon', 'Nurse'),
(2, 'Salsabil Rahman', '2.jpg', 'Neurology', 'Morning', 'Lab Assistant');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `role` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `email`, `hash`, `role`) VALUES
(36, 'moinul.hasan45777@gmail.com', '$argon2id$v=19$m=131072,t=4,p=2$V2VJN3NYMmVQZDdVdVpSNw$w3cxW8CqFVLE+8OD25rlfjTVl2v7kK/6FfWFZfpJVRY', 'patient'),
(38, 'dr.sohel@hmc.com', '$argon2id$v=19$m=131072,t=4,p=2$aVROVWZjb1NRUjhUdjR6Lg$vceu+DzvisNlxYEdbMuED++OEVYasSqzJJLetEwDpQs', 'doctor'),
(39, 'dr.newaz@hmc.com', '$argon2id$v=19$m=131072,t=4,p=2$VEJZU0JyL0pGSE9lMDRiTg$10bjocAluLULhumApO86fHM+ilx097O8qNufJSAedYM', 'doctor'),
(40, 'dr.merajul@hmc.com', '$argon2id$v=19$m=131072,t=4,p=2$OEFoMFpSWjFOYWFkdVRkUA$mPkvO05kI7/9vb+9O7D9rYbrdoX/eFf7tS1TbXJGrtM', 'doctor'),
(41, 'admin@hmc.com', '$argon2id$v=19$m=131072,t=4,p=2$TU43RFcydzR2T2E2Lm9ieA$LvS0uR5hVyBYyGRZUnJmWJF9/9VQpqdHU+I+e/hP0vY', 'admin'),
(42, 'receptionist@hmc.com', '$argon2id$v=19$m=131072,t=4,p=2$Ny5tdFJlYS8zMk80TWRZLg$sfYmLqwkriMNEclpk5X0dRPuxuGjymrOS1+ndDn7HOY', 'receptionist'),
(43, 'staff1@hmc.com', '$argon2id$v=19$m=131072,t=4,p=2$WGllbnV4VG1jTGpDaUt2OA$TsCp3PUIJHmRxAIzKva8qSKKfnzFZU9LD7xX7+TfLo8', 'staff'),
(44, 'staff2@hmc.com', '$argon2id$v=19$m=131072,t=4,p=2$LmpBQ3pzUGN3RUg3cmppQg$NGBIVTZdY2rHBgcpIqAxXd8KKFG57FaLkyaet3Q5/CA', 'staff'),
(45, 'moinulovi10@gmail.com', '$argon2id$v=19$m=131072,t=4,p=2$NlRKYURWZmNnbnB2Zm5yaQ$L1JSwa64WiUPZBKwdR06qUEvpRMjmhNx/EagN7T2BNc', 'staff');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`doctor_id`),
  ADD KEY `user_id_FK_2` (`user_id`);

--
-- Indexes for table `medical_histories`
--
ALTER TABLE `medical_histories`
  ADD PRIMARY KEY (`medical_history_id`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`patient_id`),
  ADD KEY `user_id_FK_1` (`user_id`);

--
-- Indexes for table `staffs`
--
ALTER TABLE `staffs`
  ADD PRIMARY KEY (`staff_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `doctor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `medical_histories`
--
ALTER TABLE `medical_histories`
  MODIFY `medical_history_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `patient_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `staffs`
--
ALTER TABLE `staffs`
  MODIFY `staff_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `doctors`
--
ALTER TABLE `doctors`
  ADD CONSTRAINT `user_id_FK_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `patients`
--
ALTER TABLE `patients`
  ADD CONSTRAINT `user_id_FK_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
