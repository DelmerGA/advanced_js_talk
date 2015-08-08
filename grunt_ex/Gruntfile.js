module.exports = function (grunt) {
 
  grunt.loadNpmTasks('grunt-contrib-jst');

  grunt.initConfig({
    jst: {
      compile: {
        options: {
          processName: function (fp) {
            fp.match(/(.*)\/(.*)\.html/)[2]
          },
          templateSettings: {
            prettify: true
          }
        },
        files: {
          "./templates.js": ["./examples/*.html"]
        }
      }
    }
  })
  

};
