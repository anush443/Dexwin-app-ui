pipeline {
     agent {
         label 'reactjs'
     }
     stages {
        stage("Deploy") {
            steps {
                sh "rsync -rav --delete build/* administrator@172.16.0.235:/var/www/html/react-pipeline/proficient-solidity-sportsbook-21064011-reactjs-pune-v2/"
                sh "echo v2-proficientpune.mobiloitte.org"
                
            }
        }
    }
}

