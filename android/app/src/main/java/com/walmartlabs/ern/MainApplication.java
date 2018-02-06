package com.walmartlabs.ern;

import android.app.Application;

import com.walmartlabs.ern.container.ElectrodeReactContainer;
import com.walmartlabs.ern.RunnerConfig;
import com.walmartlabs.ern.container.plugins.CodePushPlugin;

public class MainApplication extends Application {

  @Override
  public void onCreate() {
    super.onCreate();

    ElectrodeReactContainer.initialize(
            this,
            new ElectrodeReactContainer.Config().isReactNativeDeveloperSupport(RunnerConfig.RN_DEV_SUPPORT_ENABLED),
            new CodePushPlugin.Config("Ihnqwl-q2GeVHXXowPkZN4uMlUvU1e0b1580-1e9f-4dc6-a7c9-4c6f6ac0bec5"));
  }

}
