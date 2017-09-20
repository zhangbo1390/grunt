/**
 * Created by XbZhang on 2017/9/18.
 */
//包装函数
module.exports = function(grunt){
    //任务配置，所有插件的配置信息
    grunt.initConfig({
        //获取package.json的信息
        pkg: grunt.file.readJSON('package.json'),
        jshint:{
            build:['Gruntfile.js','src/*.js']
        },
        //uglify 压缩javascript代码 插件的配置信息
        uglify:{
            options:{
                banner:'/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd")%> - <%= pkg.author%>*/'
            },
            build:{
                src:'src/test.js',
                dest:'build/<%= pkg.name%>-<%=pkg.version%>.js.min.js'
            }
        },
        csslint:{
            build:['src/*.css'],
            csslint:'.csslint'
        },
        watch:{
            script:{
                files: ['src/*.js'],
                tasks:['jshint'],
                options:{spawn:false}
            }

        }
    });
    //告诉grunt我们将使用这个插件
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //告诉grunt当我们在终端中输入grunt时需要些什么
    grunt.registerTask('default',['watch']);
};
