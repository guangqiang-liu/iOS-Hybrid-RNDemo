//
//  RNShopModuleVC.m
//  iOSRN
//
//  Created by 刘光强 on 2018/2/23.
//  Copyright © 2018年 刘光强. All rights reserved.
//

#import "RNShopModuleVC.h"
#import "RCTRootView.h"

@interface RNShopModuleVC ()

@end

@implementation RNShopModuleVC

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    self.view.backgroundColor = [UIColor whiteColor];
    
    NSURL * jsCodeLocation;
#ifdef DEBUG
    NSString * strUrl = @"http://localhost:8081/index.ios.bundle?platform=ios&dev=true";
    jsCodeLocation = [NSURL URLWithString:strUrl];
#else
    // do sth
    jsCodeLocation = [NSURL URLWithString:[[NSBundle mainBundle] pathForResource:@"index.ios.jsbundle" ofType:nil]];
#endif
    NSDictionary *params = @{@"componentName":@"ShopApp1", @"args":@{@"params":@"这是原生传递的参数"}};

    RCTRootView * rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                         moduleName:@"iOSRN"
                                                  initialProperties:params
                                                      launchOptions:nil];
    self.view = rootView;
    
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(changeTitle:) name:@"RNChangeTitle" object:nil];
}

- (void)changeTitle:(NSNotification *)notification {
    NSLog(@"成功收到===>通知： %@", notification);
    // 注意不能在这里移除通知否则push进去后有pop失效
    self.title = notification.userInfo[@"title"];
}

@end
