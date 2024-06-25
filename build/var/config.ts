// 定义开发代码存储位置的代码类型
type DeploymentSiteCode = 'sc' | 'nm' | 'yq'
// 分别定义不同开发代码在各地区的发版服务器代码类型，如：四川版本代码发布了驷马桥、达州、肖家河
type ScFbdq = 'smq' | 'dz' | 'xjh'
type NmDbqq = 'kbs' | 'wsq' | 'dsq' | 'eq' | 'etkqq' | 'erdss'
type YqFbdq = 'yq'
/**
 * 映射部署站点代码到其对应的本地文件系统路径。
 */
type DeploymentDirectories = {
  [key in DeploymentSiteCode]: string
}
/**
 * 组织机构代码，包含了所有地区的发版服务器代码。
 */
export type InstitutionCode = ScFbdq | NmDbqq | YqFbdq;
/**
 * 部署目录配置，根据开发代码存储位置代码映射到实际的文件系统路径。
 */
export const deploymentDirectories: DeploymentDirectories = {
  sc: 'E:/jtGit/web/his-flie/sc/lib23/js/', // 四川
  nm: 'E:/jtGit/web/his-flie/nm/lib23/js/', // 内蒙
  yq: 'E:/jtGit/web/his-flie/yq/lib23/js/' // 伊旗
}
/**
 * 机构部署映射关系，用于确定每个具体发版服务器代码所归属的开发代码存储位置。
 */
export const institutionDeploymentMapping: Record<InstitutionCode, DeploymentSiteCode> = {
  smq: 'sc',
  dz: 'sc',
  xjh: 'sc',
  kbs: 'nm',
  wsq: 'nm',
  dsq: 'nm',
  eq: 'nm',
  etkqq: 'nm',
  erdss: 'nm',
  yq: 'yq'
}