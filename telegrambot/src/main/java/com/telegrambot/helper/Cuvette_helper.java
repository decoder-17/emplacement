package com.telegrambot.helper;

import java.util.HashMap;

public class Cuvette_helper {

    private final static HashMap<String, String> rolesObj = new HashMap<String, String>() {
        {
            put("backend developer", "6135c025df4eadc1bd885be8");
            put("big data engineer", "61b42ee803a75d6a2318c430");
            put("blockchain developer", "61b42ee803a75d6a2318c431");
            put("brand specialist", "629b257cf5543ba0b054eb2f");
            put("business analyst", "629b257cf5543ba0b054eb29");
            put("business development", "629b257cf5543ba0b054eb28");
            put("cloud engineer", "6135c025df4eadc1bd885bf2");
            put("community management", "629b257cf5543ba0b054eb35");
            put("content analyst", "61dd7970746692cd07008b5a");
            put("content writer", "62c68c38e9536402bb1e51c6");
            put("customer success", "629b257cf5543ba0b054eb2d");
            put("data analyst", "61b42ee803a75d6a2318c432");
            put("data engineer", "6135c025df4eadc1bd885bed");
            put("data entry", "629b257cf5543ba0b054eb39");
            put("data science", "61407420fa3066fe2a9662b8");
            put("devops engineer", "6135c025df4eadc1bd885bef");
            put("developer advocate (devrel)", "631a363ff10d05e0801ecf4f");
            put("digital marketing", "629b257cf5543ba0b054eb22");
            put("embedded software engineer", "61b42ee803a75d6a2318c433");
            put("fashion design", "629b257cf5543ba0b054eb3a");
            put("finance", "629b257cf5543ba0b054eb27");
            put("founder's office", "62c68c56e9536402bb1e51c7");
            put("frontend developer", "6135c025df4eadc1bd885be7");
            put("fullstack developer", "6135c025df4eadc1bd885be9");
            put("game developer", "6135c025df4eadc1bd885bf3");
            put("graphic design", "629b257cf5543ba0b054eb21");
            put("growth", "629b257cf5543ba0b054eb37");
            put("human resources (hr)", "629b257cf5543ba0b054eb23");
            put("law", "629b257cf5543ba0b054eb38");
            put("legal consultant", "629b257cf5543ba0b054eb33");
            put("mlops engineer", "6135c025df4eadc1bd885bf0");
            put("machine learning engineer", "6135c025df4eadc1bd885bec");
            put("management consultant", "629b257cf5543ba0b054eb32");
            put("market/business research", "629b257cf5543ba0b054eb2c");
            put("marketing", "629b257cf5543ba0b054eb24");
            put("marketing/sales", "629b257cf5543ba0b054eb2b");
            put("mobile app developer", "6135c025df4eadc1bd885beb");
            put("ngo", "629b257cf5543ba0b054eb25");
            put("network engineer", "61b42ee803a75d6a2318c434");
            put("operations", "629b257cf5543ba0b054eb34");
            put("product management", "6154499ae2985fba7ba7e664");
            put("product operations", "629b257cf5543ba0b054eb36");
            put("product marketing", "629b257cf5543ba0b054eb2a");
            put("public relations (pr)", "629b257cf5543ba0b054eb2e");
            put("qa engineer", "6135c025df4eadc1bd885bee");
            put("social media marketing", "629b257cf5543ba0b054eb30");
            put("software developer", "6135c025df4eadc1bd885bea");
            put("software development engineer in test (sdet)", "62221445fccf21cb6c477fed");
            put("solution analyst", "63a160827433392bace50a19");
            put("strategy", "629b257cf5543ba0b054eb3c");
            put("subject matter expert (sme)", "61dd7970746692cd07008b5b");
            put("supply chain management (scm)", "629b257cf5543ba0b054eb3d");
            put("technical content engineer", "61dd7970746692cd07008b59");
            put("technical content writer", "629b257cf5543ba0b054eb31");
            put("technical operations", "623ebd7d1b0564483ab43729");
            put("technical product manager", "6140740efa3066fe2a9662b7");
            put("testing engineer", "6135c025df4eadc1bd885bf1");
            put("ui", "61b42ee803a75d6a2318c435");
            put("ui designer", "61b42ee803a75d6a2318c435");
            put("ux", "61b42ee803a75d6a2318c435");
            put("ux", "61b42ee803a75d6a2318c435");
            put("ui ux designer", "61b42ee803a75d6a2318c435");
            put("video/graphics editing", "629b257cf5543ba0b054eb3e");
            put("graphics editing", "629b257cf5543ba0b054eb3e");
            put("volunteer", "629b257cf5543ba0b054eb26");
            put("wordpress developer", "61dd7970746692cd07008b5c");
        }
    };

    public static String findRoleId(String role) {
        return rolesObj.get(role);
    }
}
