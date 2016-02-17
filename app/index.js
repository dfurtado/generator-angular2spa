'use strict';

var generators = require('yeoman-generator'),
    path = require('path'),
    yosay = require('yosay');

var Generator = module.exports = generators.Base.extend({

    constructor: function () {

        generators.Base.apply(this, arguments);
        this.sourceRoot(path.join(__dirname, '../template/'));

    }

});

Generator.prototype.Greetings = function() {
	
    console.log(yosay("Welcome to the (awesome) Angular 2 generator!"));
	
};

Generator.prototype.PromptUser = function() {

    var done = this.async();

    this.prompt([{
        type    : 'input',
        name    : 'projectname',
        message : 'Your project name:',
        required: true
    }, {
        type    : 'input',
        name    : 'description',
        message : 'Project description:',
        required: false
    }, 
    {
        type    : 'input',
        name    : 'projectlicense',
        message : 'License:',
        default : 'MIT',
        required: true
    }], function (answers) {

        this.projectName = answers.projectname;
        this.projectDescription = answers.description || "";        
        this.projectLicense = answers.projectlicense;

        this.destinationRoot(path.join(this.destinationRoot(), "/" + this.projectName));
		
        done();      	

    }.bind(this));

};

Generator.prototype.copyFiles = function() {

	this.directory(
		path.join(this.sourceRoot()),
		path.join(this.destinationRoot()));

};

Generator.prototype.packageFiles = function() {

    var templateModel = {
        projectName: this.projectName,
        projectDescription: this.projectDescription,
		projectLicense: this.projectLicense
    };
	
    this.template(
            path.join(this.sourceRoot(), "package.json"),
            path.join(this.destinationRoot(), "/package.json"),
            templateModel);

};

Generator.prototype.install = function() {

    this.installDependencies({ 
        npm: true,
        bower: false,
        callback: function() {
            console.log(yosay("We are all done, just cd into your project folder and run: npm start"));
        }.bind(this)
    });

};