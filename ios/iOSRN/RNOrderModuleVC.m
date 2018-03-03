//
//  RNOrderModuleVC.m
//  iOSRN
//
//  Created by 刘光强 on 2018/2/23.
//  Copyright © 2018年 刘光强. All rights reserved.
//

#import "RNOrderModuleVC.h"
#import "RCTRootView.h"

@interface RNOrderModuleVC ()

@end

@implementation RNOrderModuleVC

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
    NSDictionary *params = @{@"componentName":@"OrderApp1", @"args":@{@"params":@"这是原生传递的参数"}};

    RCTRootView * rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                         moduleName:@"iOSRN"
                                                  initialProperties:params
                                                      launchOptions:nil];
    self.view = rootView;
}


@end
