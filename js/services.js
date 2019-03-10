'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  factory('cv', function(){
        var today = function(){
            return new Date();
        };
        var age = function(birthDate){
            var birthDateThisYear = new Date(new Date().getFullYear(), birthDate.getMonth(), birthDate.getDate());
            if(birthDateThisYear.getTime() > new Date().getTime()){
                return birthDateThisYear.getFullYear()-birthDate.getFullYear()-1;
            }
            return (birthDateThisYear.getFullYear()-birthDate.getFullYear());
        };

        return {
            personalia: {
                name: "Tommy Svendsen",
                address: "Bjørmofaret 11, 2068 Jessheim",
                phone: "+47 41 48 58 27",
                email: "tommysven@gmail.com",
                linkedin: "http://www.linkedin.com/in/tommysvendsen",
                onlinecv: "https://dl.dropboxusercontent.com/u/841415/cv/index.html#/cv",
                birthdate: "16.05.1980",
                description: "I'm a very dedicated developer who enjoys all aspects of system development, from architecture design to implementing stuff in code. " +
                    "I strongly believe in TDD and work test-driven as much as possible. " +
                    "I always try to keep up to date with new technologies related to what I'm doing and am also " +
                    "capable of transforming usages of new technologies into my current work situation. I always go for the 'little extra' and" +
                    " deliver value to my colleagues by being an experienced resource. I have an eye for design, and can be a good sparring partner when discussing " +
                    "usability of ui's.",
                personalSkills: ["Love challenges", "Creative", "Dedicated team member",
                    "Accurate and solution oriented", "Interested in new technologies", "Delivering High quality code"],
                personinfo: "I'm a " + age(new Date(1980, 4, 16)) + " years old married man with two kids of age " + age(new Date(2008,1,25)) + " & " +
                    age(new Date(2012,10,28)) + " living at Jessheim. I love to be creative and spend a lot of time building things at home. " +
                    "I play golf, love to be in the wild fishing, or out running."
            },
            skills: {
                javascript: ["angular", "typescript", "nodejs", "angularjs", "react", "jQuery", "Dojo Toolkit", "bootstrap", "karma", "jasmine", "qunit"],
                java: ["kotlin", "spring", "spring-mvc", "spring-integration", "spring-batch", "jersey", "JPA", "opensaml", "junit"],
                versioning: ["git", "CVS", "SVN", "GIT", "clearcase"],
                ci: ["gitlab", "jenkins", "hudson", "cruisecontrol"],
                appservers: ["Google Cloud Platform", "Weblogic", "Jetty", "Websphere", "Tomcat", "Resin", "Express"],
                build: ["gradle", "maven2", "maven3", "ant"],
                os: ["Linux", "Windows", "Mac OSX", "AIX", "HP-UX", "SunOS"],
                project: ["Kanban", "Scrum"],
                general: ["OpenID Connect", "OAuth2", "Architecture design", "unix", "RegEX", "SQL", "Webservices", "SSL", "REST", "TDD"]
            },
            languages: [
                {   name: "Norwegian", proficciency: "Profficient"},
                {   name: "English", proficciency: "Profficient"}
            ],
            education: [

                {
                    timespan: "2002 - 2005",
                    school: "Høgskolen i Finnmark",
                    description: "Bachelor in Information technolgy with focus on programming in java"
                },
                {
                    timespan: "2000 - 2002",
                    school: "Ladejarlen VGS",
                    description: "Vocational school providing me with nautical certificates to be captain on all shipsizes in the world."
                },
                {
                    timespan: "1996 - 1998",
                    school: "Honningsvåg VGS",
                    description: "Nautical school"
                }
            ],
            courses: [
                {
                    year: 2016,
                    title: "ng-europe",
                    provider: "ngParis"
                },
                {
                    year: 2013,
                    title: "Gradle experts training",
                    provider: "Skillsmatter london"
                },
                {
                    year: 2010,
                    title: "Kanban Coach Camp with David Andersson",
                    provider: "Crisp.se"
                },
                {
                    year: 2010,
                    title: "CQRS Week with Greg Young",
                    provider: "Nordea Internal"
                },
                {
                    year: 2010,
                    title: "Spring integration",
                    provider: "Programutvikling"
                },
                {
                    year: 2009,
                    title: "Spring Core",
                    provider: "Programutvikling"
                },
                {
                    year: 2009,
                    title: "Legacy code test writing techniques",
                    provider: "Programutvikling"
                },
                {
                    year: 2009,
                    title: "Scrum Master with Mike Cohn",
                    provider: "Programutvikling"
                }
            ],
            experiences: [
                {
                    employer: "Sonitor Technologies ASA",
                    position: "Senior Software Developer/Architect",
                    timespan: {from: "01.08.15", to: new Date()},
                    description: "Architecting and developing solutions around Sonitor Sense",
                    projectsTitle: "Sonitor Technologies ASA",
                    projects: [
                        {
                            name: "Sonitor Sense System Server",
                            customer: "Sonitor Technologies ASA",
                            position: "Senior Software Developer",
                            timespan: {from: "01.08.15", to: new Date()},
                            description: "Doing new development and maintenance to the Sonitor Sense System portfolio. This involves" +
                                " doing development on java backend handling all iot infrastructure devices, and handling input from various Wifi Vendors. " +
                                "Development work related to UI done in AngularJS, both developing new features and handling maintenance and at the same time" +
                                " going through a conversion to typescript and preparation for a transition to Angular. Supporting technical people and customers in the" +
                                " field doing troubleshooting.",
                            technologies: ["Typescript", "Kotlin", "Jersey", "MapDB", "Java 10", "HK2", "Bootstrap", "Jetty", "Maven 3", "Karma", "Jasmine"]
                        },
                        {
                            name: "Forkbeard Cloud Service Design",
                            customer: "Sonitor Technologies ASA",
                            position: "Senior Software Architect",
                            timespan: {from: "01.01.17", to: new Date()},
                            description: "Doing the initial design of the cloud architecture serving as backend for the Forkbeard solution. This work resulted in detailed " +
                                "plans for implementing a microservice based architecture to handle all mobile phones connected to the Forkbeard Cloud backend. A lot of the work" +
                                " consisted in thinking through security models, scalability and cost related issues. During the end of this period an implementation of the " +
                                "architecture sketches was started. My role has been to both model and implement several cloud services with regards to indoor positioning while utilizing " +
                                "cloud services like, datastore, binary storage, pub sub, authentication and authorization",
                            technologies: ["Kotlin", "Spring", "Google Cloud Platform", "OAuth2", "OpenID Connect", "SSO"]
                        }
                    ]
                },
                {
                    employer: "UDP AS",
                    position: "Senior Consultant",
                    timespan: {from: "01.03.11", to: "31.07.15"},
                    description: "Working as a senior consultant in different projects",
                    projectsTitle: "Consultant projects",
                    projects: [
                        {
                            name: "KLP Fundadministration",
                            customer: "Kommunal LandspensjonsKasse (KLP)",
                            position: "Senior Developer",
                            timespan: {from: "16.12.13", to: new Date()},
                            description: "Building a fund administration app that is built into KLP's CRM system. The system provides" +
                                " functionality to handle incoming orders from private and corporate customers doing fund trading in " +
                                "KLP. Integration towards Microsoft Dynamics(CRM), VPS(Verdipapir Sentralen) and klp.no (internet orders)." +
                                " My role is senior java/javascript developer doing frontend and backend design and development.",
                            technologies: ["Spring MVC", "JPA", "Dojo Toolkit", "Bootstrap", "Websphere", "Jetty", "Maven 3", "Karma", "QUnit",
                            "Wro4j", "J2EE", "JaxB"]
                        },
                        {
                            name: "KLP Min Side",
                            customer: "Kommunal LandspensjonsKasse (KLP)",
                            position: "Senior Developer",
                            timespan: {from: "01.10.11", to: "16.12.13"},
                            description: "Implementation of a plugin based architecture to provide KLP's private and corporate " +
                                "customers with tools on the web. Key person in developing the frontend architecture that allows " +
                                "KLP to deploy new functionality to the web runtime with no disturbances for the users. " +
                                "Currently there are about 20 developers building new plugins that are running inside the platform, which" +
                                "is serving all users with functionality to to pension calculations, insurance calculations, netbank and trading" +
                                " funds on https://www.klp.no. Together with the frontend development I worked a lot with implementing " +
                                "restful services using java (spring and jersey) to provide data to the frontend",
                            notes: "We did a presentation on the platform developed at JavaZone 2012 see http://vimeo.com/49386441 (In Norwegian)",
                            technologies: ["Dojo Toolkit", "J2EE", "Spring MVC", "Spring integration", "Jersey", "Maven 3",
                                "Gradle", "Karma", "QUnit", "JPA", "Webservices", "Websphere", "Jetty", "Wro4j", "Apache CXF"]
                        },
                        {
                            name: "Reservation of flights and flight training",
                            customer: "Norges Luftsportsforbund",
                            position: "Senior Developer",
                            timespan: {from: "01.07.11", to: "31.09.11"},
                            description: "Short non-profit project creating a booking application for private planes used in instructions, " +
                                "and providing teachers possibility to book planes and students to book private hours for training. " +
                                "The project was only a proof of concept and test to see if NLF should use existing software or develop their" +
                                " own system for booking.",
                            technologies: ["Play Framework", "jQuery", "MySql"]
                        },
                        {
                            name: "BankID on Mobile",
                            customer: "Nordea Bank Norge ASA",
                            timespan: {from: "01.03.12", to:"30.06.12"},
                            description: "Completion of Order application for BankID on mobile. " +
                                "Main objectives was to create an application that allowed the users of the norwegian" +
                                " netbank in Nordea to order BankID on mobile. The application was implemented integrating with" +
                                " webservices towards nets",
                            technologies: ["spring", "j2ee", "oracle", "webservices", "jaxb", "Hardware security module", "DWR", "WRO4J", "BankID"]

                        }
                    ]
                },
                {
                    employer: "Nordea Bank Norge ASA",
                    position: "Senior Software Developer",
                    timespan: {from: "01.01.08", to:"28.02.11"},
                    description: "Development of Netbank applications using J2EE. Mainly focused on authentication" +
                        " using BankID and integration towards Nets. Responsible for authentication and autorization of the" +
                        "netbank users and administrators for the entire Norwegian netbank",
                    notes: "Working hard to implement Scrum in Nordea, having the Scrummaster role",
                    technologies: ["Weblogic", "j2ee", "dwr", "wro4j", "Maven2", "BankID", "Maven3"],
                    projectsTitle: "A few selected projects",
                    projects:[
                        {
                            name: "BankID on Mobile",
                            customer: "Nordea Bank Norge ASA",
                            position: "Senior Senior Software Developer",
                            timespan: {from : "01.06.10", to: "31.12.10"},
                            description: "Implementation of ordering application for BankID on mobile. Architectural design and " +
                                "coding of application with integration towards Nets using jaxb and webservices.",
                            technologies:["spring", "oracle", "jaxb", "dwr", "wro4j", "BankID", "Maven3", "jQuery"]
                        },
                        {
                            name: "Midas 3.0 Upgrade of netbank norway",
                            customer: "Nordea Bank Norge ASA",
                            position: "Senior Senior Software Developer",
                            timespan: {from : "01.01.10", to: "31.12.10"},
                            description: "Developer and technical solution architect to restructure and upgrade the technical" +
                                "platform used in netbank solutions. Main focus around upgrading from java 1.4 to java 1.6, Maven1 to Maven2" +
                                " and weblogic 8 to 11. Also working with database upgrades" ,
                            technologies:["spring", "oracle", "jaxb", "dwr", "wro4j", "BankID", "Maven3", "EJB"]
                        },
                        {
                            name: "BankID Integration",
                            customer: "Nordea Bank Norge ASA",
                            position: "Senior Senior Software Developer",
                            timespan: {from : "01.01.08", to: "31.12.10"},
                            description: "Main responsible for all development related to BankID integration. Responsibility" +
                                " regarding both authentication and BankID Registration Authority. Integration towards Nets BankID " +
                                "infrastructure." ,
                            technologies:["spring", "oracle", "jaxb", "BankID", "Maven3", "EJB", "pki",
                                "webservices", "networking", "applet"]
                        } ,
                        {
                            name: "Netbank Upgrade",
                            customer: "Nordea Bank Norge ASA",
                            position: "Senior Senior Software Developer",
                            timespan: {from : "01.01.09", to: "31.12.09"},
                            description: "Technical solution architect and developer in a number of netbank applications. " +
                                "Working as a Scrum master for a team of 12 persons. General upgrade of the netbank applications " +
                                "updating look and feel and adding functionality." ,
                            technologies:["spring", "oracle", "BankID", "Maven3", "EJB",
                                "webservices", "struts", "tiles"]
                        },
                        {
                            name: "SAFE Portfolio responsibility",
                            customer: "Nordea Bank Norge ASA",
                            position: "Senior Senior Software Developer",
                            timespan: {from : "01.01.08", to: "31.12.2010"},
                            description: "Developer and solution architect for Nordea's SAFE portfolio, providing solutions for" +
                                "authentication, authorization, user administration and single signon between applications and partners." ,
                            technologies:["spring", "oracle", "ejb", "struts", "reflection", "ssl", "webservices"]
                        }
                    ]
                },
                {
                    employer: "Fast Search And Transfer ASA",
                    position: "Release Manager / Test engineer",
                    timespan: {from: "19.09.05", to:"31.12.07"},
                    description: "Automating release management making the release processes more efficcient for the entire" +
                        " company. Implemented fully automated hotfix application that saved the company for hundreds of hours " +
                        "every year. Development of internal Test Framework and working with testing + implementing statistic " +
                        "functionality measuring KPI for different departments",
                    notes: "The position was split 50/50 between Release Management / Testing",
                    technologies: ["python", "php", "perl", "java", "microsoft sql server", ".NET", "ftp", "sharepoint", "footprints"]
                }
            ]
        };

    }).factory("skillset", function(){
        return {

            ratings: {
                react: 3,
                architecturedesign: 4,
                jenkins: 4,
                gitlab: 4,
                unix: 5,
                angular: 5,
                typescript: 5,
                kotlin: 4,
                javascript:  4,
                weblogic:4 ,
                jetty: 5,
                websphere: 4,
                tomcat: 3,
                resin: 3,
                gradle: 4,
                maven: 4,
                ant: 3,
                hudson: 4,
                cruisecontrol: 3,
                spring: 5,
                'spring-mvc': 5,
                'spring-integration': 4,
                'spring-batch': 4,
                jersey: 4,
                jpa: 4,
                opensaml: 3,
                junit: 5,
                nodejs: 4,
                angularjs: 4,
                jquery: 4,
                dojotoolkit: 5,
                bootstrap:4,
                karma: 5,
                jasmine: 5,
                qunit: 5,
                windows: 4,
                linux: 5,
                macosx: 4,
                aix: 3,
                'hp-ux': 3,
                sunos: 3,
                kanban: 4,
                scrum: 4,
                cvs: 4,
                svn: 5,
                git: 4,
                clearcase: 3,
                express: 4,
                bankid: 5,
                maven3: 4,
                maven2: 4,
                regex: 4,
                webservices: 4,
                sql: 4,
                rest: 4,
                tdd: 4,
                ssl: 4,
                googlecloudplatform: 4,
                openidconnect: 4,
                oauth2: 4

            },
            getRating: function(tech){
                return this.ratings[tech.toLowerCase().replace(/ /g, "")];
            }
        }
    });
