#install node js

class { '::nodejs':
  repo_url_suffix => 'node_4.x',
}

package { 'grunt-cli':
  ensure   => '1.2.0',
  provider => 'npm',
  require  => Package['nodejs']
}

package { 'http-server':
  ensure   => '0.9.0',
  provider => 'npm',
  require  => Package['nodejs']
}

package { 'phantomjs':
  ensure   =>  '2.1.1',
  provider => 'npm',
  require  => Package['nodejs']
} ->

file { ['/etc/profile.d/phantomjs.sh','/var/lib/jenkins/.profile']:
  ensure  =>  present,
  content =>  inline_template('export PHANTOMJS_BIN="/usr/bin/phantomjs"'),
}
