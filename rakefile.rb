CURRENT_BOOTSTRAP_VERSION = "4.4.1"
CURRENT_TACHYONS_VERSION = "4.7.1"
namespace :fetch do
  desc "fetch tachyons scss files"
  task :tachyons do
    `curl -LkSs https://github.com/tachyons-css/tachyons-sass/archive/v#{CURRENT_TACHYONS_VERSION}.tar.gz | tar xz`
    `mv -f ./tachyons-sass-*/scss ./_sass/tachyons-sass`
    `mv -f ./tachyons-sass-*/tachyons.scss ./_sass/tachyons-sass`
    `rm -rf ./tachyons-sass-*`
  end

  desc "fetch bootstrap scss files"
  task :bootstrap do
    target = "_sass/bootstrap/"
    `rm -rf #{target}`
    `mkdir #{target}`
    `curl -LkSs https://github.com/twbs/bootstrap/archive/v#{CURRENT_BOOTSTRAP_VERSION}.tar.gz | tar xz`
    `mv -fv ./bootstrap-#{CURRENT_BOOTSTRAP_VERSION}/scss/* ./#{target}`
    `rm -rf bootstrap-#{CURRENT_BOOTSTRAP_VERSION}/`
  end
end
