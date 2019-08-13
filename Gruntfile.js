module.exports = function(grunt) {
  // Load S3 plugin
  grunt.loadNpmTasks('grunt-aws')

  // Static Webserver
  grunt.loadNpmTasks('grunt-contrib-connect')

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    aws: grunt.file.readJSON('aws-keys.json'),
    s3: {
      options: {
        accessKeyId: '&lt;%= aws.accessKeyId %&gt;',
        secretAccessKey: '&lt;%= aws.secretAccessKey %&gt;',
        bucket: '&lt;%= aws.bucket %&gt;',
      },
      build: {
        cwd: 'public',
        src: '**',
      },
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: 'public',
          keepalive: true,
        },
      },
    },
  })

  // Default task(s).
  grunt.registerTask('default', ['connect'])
}
